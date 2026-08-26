import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignOut, Plus, PencilSimple, Trash, Image as ImageIcon, X, UploadSimple, Check } from '@phosphor-icons/react';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://127.0.0.1:3000';

function Admin() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('experiences');
  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [isPresent, setIsPresent] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', message: '', onConfirm: null });
  const [alertDialog, setAlertDialog] = useState({ isOpen: false, title: '', message: '', isError: false });
  const navigate = useNavigate();

  const parseOldDate = (dateStr) => {
    if (!dateStr || dateStr.includes('-')) return dateStr;
    if (dateStr.toLowerCase() === 'present') return 'Present';
    const months = {
      Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
      Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12'
    };
    const [mon, year] = dateStr.split(' ');
    if (months[mon] && year) {
      return `${year}-${months[mon]}-01`;
    }
    return dateStr;
  };

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }
      try {
        const res = await fetch(`${BACKEND_URL}/api/auth/verify`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (!res.ok) throw new Error('Invalid token');
        fetchData('experiences');
        setLoading(false);
      } catch (err) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    };
    checkAuth();
  }, [navigate]);

  const fetchData = async (tab) => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/${tab}`);
      const data = await res.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    fetchData(tab);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const handleOpenModal = () => {
    setFormData({});
    setSelectedFile(null);
    setIsPresent(false);
    setIsModalOpen(true);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const token = localStorage.getItem('token');
      let imageUrl = formData.image;

      // Handle file upload if file selected
      if (selectedFile) {
        const fileData = new FormData();
        fileData.append('image', selectedFile);
        const uploadRes = await fetch(`${BACKEND_URL}/api/upload`, {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${token}` },
          body: fileData
        });
        if (!uploadRes.ok) throw new Error('Gagal mengupload gambar');
        const uploadData = await uploadRes.json();
        imageUrl = uploadData.imageUrl;
      }

      const dataToSave = { ...formData, image: imageUrl };

      // Handle tags array conversion
      if (dataToSave.tags !== undefined) {
        if (typeof dataToSave.tags === 'string' && !dataToSave.tags.startsWith('[')) {
          dataToSave.tags = JSON.stringify(dataToSave.tags.split(',').map(t => t.trim()));
        } else if (Array.isArray(dataToSave.tags)) {
          dataToSave.tags = JSON.stringify(dataToSave.tags);
        }
      }

      if (formData.id) {
        // Update existing
        await fetch(`${BACKEND_URL}/api/${activeTab}/${formData.id}`, {
          method: 'PUT',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(dataToSave)
        });
      } else {
        // Add new
        await fetch(`${BACKEND_URL}/api/${activeTab}`, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(dataToSave)
        });
      }

      setIsModalOpen(false);
      fetchData(activeTab);
      setAlertDialog({ isOpen: true, title: 'Berhasil', message: 'Data berhasil disimpan!', isError: false });
    } catch (error) {
      console.error("Error saving document: ", error);
      setAlertDialog({ isOpen: true, title: 'Gagal', message: 'Gagal menyimpan data.', isError: true });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = (id) => {
    setConfirmDialog({
      isOpen: true,
      title: 'Konfirmasi Hapus',
      message: 'Apakah Anda yakin ingin menghapus data ini? Tindakan ini tidak dapat dibatalkan.',
      onConfirm: async () => {
        setConfirmDialog((prev) => ({ ...prev, isOpen: false }));
        try {
          const token = localStorage.getItem('token');
          const res = await fetch(`${BACKEND_URL}/api/${activeTab}/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
          });
          if (!res.ok) throw new Error('Gagal menghapus data');
          fetchData(activeTab);
          setAlertDialog({ isOpen: true, title: 'Berhasil', message: 'Data berhasil dihapus!', isError: false });
        } catch (error) {
          console.error("Error deleting document: ", error);
          setAlertDialog({ isOpen: true, title: 'Gagal', message: 'Gagal menghapus data.', isError: true });
        }
      }
    });
  };

  const renderFormFields = () => {
    if (activeTab === 'experiences') {
      return (
        <>
          <div>
            <label className="block text-sm text-white/60 mb-1">Posisi / Judul</label>
            <input required type="text" value={formData.title || ''} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:border-white/30 outline-none" />
          </div>
          <div>
            <label className="block text-sm text-white/60 mb-1">Perusahaan / Institusi</label>
            <input required type="text" value={formData.company || ''} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:border-white/30 outline-none" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm text-white/60 mb-1">Mulai (Tanggal)</label>
              <input required type="date" value={formData.startDate || ''} onChange={e => setFormData({...formData, startDate: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:border-white/30 outline-none" style={{colorScheme: 'dark'}} />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-white/60 mb-1 flex justify-between items-center">
                <span>Selesai (Tanggal)</span>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={isPresent} onChange={(e) => {
                    setIsPresent(e.target.checked);
                    if (e.target.checked) setFormData({...formData, endDate: 'Present'});
                    else setFormData({...formData, endDate: ''});
                  }} className="rounded bg-white/10 border-white/20" />
                  <span className="text-xs">Saat ini</span>
                </label>
              </label>
              <input required={!isPresent} disabled={isPresent} type={isPresent ? "text" : "date"} value={formData.endDate || ''} onChange={e => setFormData({...formData, endDate: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:border-white/30 outline-none disabled:opacity-50" style={{colorScheme: 'dark'}} />
            </div>
          </div>
        </>
      );
    } else if (activeTab === 'certifications') {
      return (
        <>
          <div>
            <label className="block text-sm text-white/60 mb-1">Judul Sertifikat</label>
            <input required type="text" value={formData.title || ''} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:border-white/30 outline-none" />
          </div>
          <div>
            <label className="block text-sm text-white/60 mb-1">Penerbit (Issuer)</label>
            <input required type="text" value={formData.issuer || ''} onChange={e => setFormData({...formData, issuer: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:border-white/30 outline-none" />
          </div>
          <div>
            <label className="block text-sm text-white/60 mb-1">Deskripsi Singkat</label>
            <textarea rows="3" value={formData.description || ''} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:border-white/30 outline-none" />
          </div>
          <div>
            <label className="block text-sm text-white/60 mb-1">Link Kredensial (Opsional)</label>
            <input type="text" value={formData.link || ''} onChange={e => setFormData({...formData, link: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:border-white/30 outline-none" />
          </div>
          <div>
            <label className="block text-sm text-white/60 mb-1">Tags (Pisahkan koma)</label>
            <input type="text" value={typeof formData.tags === 'string' && !formData.tags.startsWith('[') ? formData.tags : (formData.tags ? JSON.parse(formData.tags).join(', ') : '')} onChange={e => setFormData({...formData, tags: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:border-white/30 outline-none" />
          </div>
        </>
      );
    } else {
      // Projects
      return (
        <>
          <div>
            <label className="block text-sm text-white/60 mb-1">Judul Project</label>
            <input required type="text" value={formData.title || ''} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:border-white/30 outline-none" />
          </div>
          <div>
            <label className="block text-sm text-white/60 mb-1">Deskripsi</label>
            <textarea required rows="4" value={formData.description || ''} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:border-white/30 outline-none" />
          </div>
          <div>
            <label className="block text-sm text-white/60 mb-1">Link (Opsional)</label>
            <input type="text" value={formData.link || ''} onChange={e => setFormData({...formData, link: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:border-white/30 outline-none" />
          </div>
          <div>
            <label className="block text-sm text-white/60 mb-1">Tags (Pisahkan koma)</label>
            <input type="text" value={typeof formData.tags === 'string' && !formData.tags.startsWith('[') ? formData.tags : (formData.tags ? JSON.parse(formData.tags).join(', ') : '')} onChange={e => setFormData({...formData, tags: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:border-white/30 outline-none" />
          </div>
        </>
      );
    }
  };

  if (loading) return <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">Loading...</div>;

  return (
    <div className="h-screen bg-[#050505] text-white flex flex-col md:flex-row relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Sidebar */}
      <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/5 bg-white/[0.02] p-4 md:p-6 flex flex-col z-10 shrink-0">
        <div className="mb-4 md:mb-10 flex justify-between items-center md:block">
          <h2 className="text-xl font-bold tracking-tight">Admin Panel</h2>
          <button 
            onClick={handleLogout}
            className="md:hidden flex items-center gap-2 text-white/40 hover:text-red-400 transition-colors text-sm font-medium"
          >
            <SignOut weight="bold" className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible space-x-2 md:space-x-0 md:space-y-2 pb-2 md:pb-0 scrollbar-hide">
          {['experiences', 'projects', 'certifications'].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`whitespace-nowrap px-4 py-2 md:py-3 rounded-xl transition-all capitalize text-sm font-medium ${activeTab === tab ? 'bg-white/10 text-white' : 'text-white/40 hover:bg-white/5 hover:text-white/80'}`}
            >
              {tab}
            </button>
          ))}
        </nav>

        <button 
          onClick={handleLogout}
          className="hidden md:flex items-center gap-3 text-white/40 hover:text-red-400 transition-colors p-4 mt-auto text-sm font-medium"
        >
          <SignOut weight="bold" className="w-5 h-5" />
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-10 z-10 overflow-y-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8 gap-4 sm:gap-0">
          <h1 className="text-2xl md:text-3xl font-bold capitalize">Kelola {activeTab}</h1>
          <button 
            onClick={handleOpenModal}
            className="flex items-center justify-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-medium hover:bg-white/90 transition-colors text-sm w-full sm:w-auto"
          >
            <Plus weight="bold" /> Tambah Baru
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.length === 0 ? (
            <p className="text-white/40 col-span-full">Belum ada data. Silakan tambah baru.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col relative overflow-hidden group">
                {item.image && (
                  <img src={item.image} alt={item.title} className="w-full h-32 object-cover rounded-xl mb-4" />
                )}
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-white/60 mb-4 line-clamp-2">{item.description || item.company || item.issuer}</p>
                <div className="mt-auto flex justify-end gap-2">
                  <button onClick={() => { 
                    setFormData({
                      ...item,
                      startDate: item.startDate ? parseOldDate(item.startDate) : '',
                      endDate: item.endDate ? parseOldDate(item.endDate) : ''
                    }); 
                    setIsPresent(item.endDate === 'Present');
                    setSelectedFile(null);
                    setIsModalOpen(true); 
                  }} className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                    <PencilSimple className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDelete(item.id)} className="p-2 bg-red-500/20 text-red-400 hover:bg-red-500/40 rounded-lg transition-colors">
                    <Trash className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-[#111] border border-white/10 rounded-2xl md:rounded-3xl w-full max-w-2xl max-h-[95vh] md:max-h-[90vh] overflow-y-auto p-5 md:p-8 relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 md:top-6 md:right-6 text-white/40 hover:text-white bg-black/40 p-2 rounded-full">
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 capitalize pr-8">{formData.id ? 'Edit' : 'Tambah'} {activeTab}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {renderFormFields()}

              <div>
                <label className="block text-sm text-white/60 mb-1">
                  Gambar / Logo {formData.image && <span className="text-blue-400 text-xs">(Sudah ada gambar, biarkan kosong jika tidak ingin mengubah)</span>}
                </label>
                <div className="relative">
                  <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" id="file-upload" />
                  <label htmlFor="file-upload" className="w-full bg-white/5 border border-white/10 hover:bg-white/10 border-dashed rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer transition-colors">
                    <UploadSimple className="w-6 h-6 text-white/40 mb-2" />
                    <span className="text-sm text-white/60">
                      {selectedFile ? selectedFile.name : "Klik untuk memilih gambar atau logo dari komputer"}
                    </span>
                  </label>
                </div>
              </div>

              <div className="pt-4 flex flex-col-reverse sm:flex-row justify-end gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 font-medium transition-colors">Batal</button>
                <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white text-black font-medium hover:bg-white/90 transition-colors disabled:opacity-50 flex items-center justify-center">
                  {isSubmitting ? 'Menyimpan...' : 'Simpan Data'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Custom Alert Dialog */}
      {alertDialog.isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[70] p-4">
          <div className="bg-[#111] border border-white/10 rounded-2xl md:rounded-3xl w-full max-w-sm p-6 text-center shadow-2xl">
            <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${alertDialog.isError ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-green-500/10 text-green-400 border border-green-500/20'}`}>
              {alertDialog.isError ? <X weight="bold" className="w-8 h-8" /> : <Check weight="bold" className="w-8 h-8" />}
            </div>
            <h3 className="text-xl font-bold mb-2">{alertDialog.title}</h3>
            <p className="text-white/60 mb-6 text-sm">{alertDialog.message}</p>
            <button onClick={() => setAlertDialog({ ...alertDialog, isOpen: false })} className="w-full bg-white text-black px-5 py-2.5 rounded-xl font-medium hover:bg-white/90 transition-colors">
              Tutup
            </button>
          </div>
        </div>
      )}

      {/* Custom Confirm Dialog */}
      {confirmDialog.isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[70] p-4">
          <div className="bg-[#111] border border-white/10 rounded-2xl md:rounded-3xl w-full max-w-sm p-6 text-center shadow-2xl">
            <h3 className="text-xl font-bold mb-2">{confirmDialog.title}</h3>
            <p className="text-white/60 mb-6 text-sm">{confirmDialog.message}</p>
            <div className="flex gap-3">
              <button onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })} className="flex-1 px-5 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 font-medium transition-colors">
                Batal
              </button>
              <button onClick={confirmDialog.onConfirm} className="flex-1 px-5 py-2.5 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition-colors">
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;
