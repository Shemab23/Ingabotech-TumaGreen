'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useUser } from '@/context/UserContext';
import { Users, Edit2, Trash2, PlusCircle, Search, ChevronLeft, ChevronRight, Settings, LogOut, LayoutDashboard } from 'lucide-react';
import { useRouter } from 'next/navigation';

const AdminPage = () => {
    const route= useRouter();
  const { riders: initialRiders, handleBookRider } = useUser();
  const [riders, setRiders] = useState(initialRiders.map(r => ({...r, selected: false})));
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRider, setEditingRider] = useState(null);
  const [newRiderData, setNewRiderData] = useState({
    name: '',
    vehicleType: 'Electric Motorcycle',
    status: 'available',
    rating: '4.5',
    deliveriesCompleted: 0,
    lat: -1.9441,
    lng: 30.0619,
    distance: '1km',
    eta: '5min'
  });

  const handleNotImplemented = () => {
    alert( `🚧 Feature Not Implemented ; `)
    // toast({
    //   title: "🚧 Feature Not Implemented",
    //   description: "This admin feature is for demonstration. Full functionality can be requested! 🚀",
    //   duration: 4000,
    //   className: 'bg-yellow-50 border-yellow-200 text-yellow-700'
    // });
  };

  const filteredRiders = riders.filter(rider =>
    rider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rider.vehicleType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectRider = (id) => {
    setRiders(riders.map(r => r.id === id ? {...r, selected: !r.selected} : r));
  };

  const handleSelectAll = (checked) => {
    setRiders(riders.map(r => ({...r, selected: checked})));
  };

  const openAddModal = () => {
    setEditingRider(null);
    setNewRiderData({ name: '', vehicleType: 'Electric Motorcycle', status: 'available', rating: '4.5', deliveriesCompleted: 0, lat: -1.9441, lng: 30.0619, distance: '1km', eta: '5min' });
    setIsModalOpen(true);
  };

  const openEditModal = (rider) => {
    setEditingRider(rider);
    setNewRiderData({...rider});
    setIsModalOpen(true);
  };

  const handleSaveRider = () => {
    handleNotImplemented();
    setIsModalOpen(false);
  };

  const handleDeleteRider = (id) => {
    handleNotImplemented();
  };

  const handleDeleteSelected = () => {
    handleNotImplemented();
  };

  const allSelected = riders.length > 0 && riders.every(r => r.selected);
  const someSelected = riders.some(r => r.selected);


  return (
    <motion.div
      className="flex min-h-screen bg-green-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 shadow-lg flex flex-col">
        <div onClick={()=>route.push('/')} className="flex items-center space-x-2 mb-10">
            <img src="/vite.svg" alt="TumaGreen Logo" className="h-8 w-auto text-green-600" />
            <span className="font-orbitron text-2xl font-bold text-green-700">TumaGreen</span>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-3">
            <li><button variant="ghost" className="w-full justify-start text-green-700 bg-green-100 font-semibold"><LayoutDashboard className="mr-2 h-5 w-5" /> Dashboard</button></li>
            <li><button variant="ghost" className="w-full justify-start text-green-700 hover:bg-green-100"><Users className="mr-2 h-5 w-5" /> Riders</button></li>
            <li><button variant="ghost" className="w-full justify-start text-green-700 hover:bg-green-100" onClick={handleNotImplemented}><Settings className="mr-2 h-5 w-5" /> Settings</button></li>
          </ul>
        </nav>
        <div>
          <button variant="ghost" className="w-full justify-start text-green-700 hover:bg-green-100" onClick={handleNotImplemented}><LogOut className="mr-2 h-5 w-5" /> Logout</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-orbitron font-bold text-green-800">Rider Management</h1>
          <p className="text-green-600">Manage your fleet of TumaGreen electric riders.</p>
        </header>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <div className="relative w-1/3">
              <input
                type="text"
                placeholder="Search riders..."
                className="pl-10 form-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-400" />
            </div>
            <div>
              {someSelected && (
                <button variant="destructive" className="mr-2" onClick={handleDeleteSelected}>
                  <Trash2 className="mr-2 h-4 w-4" /> Delete Selected
                </button>
              )}
              <button className="green-button" onClick={openAddModal}>
                <PlusCircle className="mr-2 h-5 w-5" /> Add New Rider
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className='min-w-full'>
              <thead>
                <tr className="bg-green-50">
                  <th className="w-[50px]">
                    <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    />
                  </th>
                  <th className="text-green-700 font-semibold">Name</th>
                  <th className="text-green-700 font-semibold">Vehicle Type</th>
                  <th className="text-green-700 font-semibold">Status</th>
                  <th className="text-green-700 font-semibold">Rating</th>
                  <th className="text-green-700 font-semibold">Deliveries</th>
                  <th className="text-green-700 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRiders.map((rider) => (
                  <tr key={rider.id} className="hover:bg-green-50/50">
                    <td>
                        <input
                            type="checkbox"
                            checked={rider.selected}
                            onChange={(e) => handleSelectRider(rider.id, e.target.checked)}
                        />
                    </td>
                    <td className="font-medium text-green-800">{rider.name}</td>
                    <td className="text-green-600">{rider.vehicleType}</td>
                    <td>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        rider.status === 'available' ? 'bg-green-100 text-green-700' :
                        rider.status === 'in-transit' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {rider.status.charAt(0).toUpperCase() + rider.status.slice(1)}
                      </span>
                    </td>
                    <td className="text-green-600">{rider.rating} ★</td>
                    <td className="text-green-600">{rider.deliveriesCompleted}</td>
                    <td className="text-right">
                      <button variant="ghost" size="icon" className="text-green-500 hover:text-green-700" onClick={() => openEditModal(rider)}>
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button variant="ghost" size="icon" className="text-red-500 hover:text-red-700" onClick={() => handleDeleteRider(rider.id)}>

                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredRiders.length === 0 && (
            <div className="text-center py-8 text-green-600">
              No riders found matching your search.
            </div>
          )}

          <div className="flex justify-between items-center mt-6 text-sm text-green-600">
            <span>Showing {filteredRiders.length} of {riders.length} riders</span>
            <div className="flex space-x-1">
              <button variant="outline" size="sm" className="outline-green-button" onClick={handleNotImplemented}><ChevronLeft className="h-4 w-4" /></button>
              <button variant="outline" size="sm" className="outline-green-button" onClick={handleNotImplemented}><ChevronRight className="h-4 w-4" /></button>
            </div>
          </div>
        </div>
      </main>

      {/* Modal for Add/Edit Rider */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <h2 className="text-2xl font-semibold text-green-800 mb-6">{editingRider ? 'Edit Rider' : 'Add New Rider'}</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleSaveRider(); }} className="space-y-4">
              <div>
                <label htmlFor="riderName" className="form-label">Rider Name</label>
                <input id="riderName" value={newRiderData.name} onChange={(e) => setNewRiderData({...newRiderData, name: e.target.value})} className="form-input mt-1" required/>
              </div>
              <div>selectings</div>
              {/* <div> selecting things
                <label htmlFor="vehicleType" className="form-label">Vehicle Type</label>
                <Select value={newRiderData.vehicleType} onValueChange={(value) => setNewRiderData({...newRiderData, vehicleType: value})}>
                  <SelectTrigger className="form-input mt-1">
                    <SelectValue placeholder="Select vehicle type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Electric Motorcycle">Electric Motorcycle</SelectItem>
                    <SelectItem value="Electric Scooter">Electric Scooter</SelectItem>
                    <SelectItem value="Electric Van">Electric Van</SelectItem>
                    <SelectItem value="Electric Taxi">Electric Taxi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
               <div>
                <label htmlFor="status" className="form-label">Status</label>
                <Select value={newRiderData.status} onValueChange={(value) => setNewRiderData({...newRiderData, status: value})}>
                  <SelectTrigger className="form-input mt-1">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="available">Available</SelectItem>
                    <SelectItem value="in-transit">In Transit</SelectItem>
                    <SelectItem value="offline">Offline</SelectItem>
                  </SelectContent>
                </Select>
              </div> */}
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label htmlFor="rating" className="form-label">Rating</label>
                  <input id="rating" type="number" step="0.1" min="0" max="5" value={newRiderData.rating} onChange={(e) => setNewRiderData({...newRiderData, rating: e.target.value})} className="form-input mt-1" />
                </div>
                <div className="flex-1">
                  <label htmlFor="deliveriesCompleted" className="form-label">Deliveries</label>
                  <input id="deliveriesCompleted" type="number" min="0" value={newRiderData.deliveriesCompleted} onChange={(e) => setNewRiderData({...newRiderData, deliveriesCompleted: parseInt(e.target.value) || 0})} className="form-input mt-1" />
                </div>
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button type="button" variant="outline" className="outline-green-button" onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button type="submit" className="green-button">Save Rider</button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default AdminPage;
