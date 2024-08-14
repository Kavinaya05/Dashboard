// import React, { useState } from 'react';

// const MenuManagement = ({ menuItems, onReplace, onDelete }) => {
//   const [selectedIndex, setSelectedIndex] = useState(null);
//   const [action, setAction] = useState(''); // Track the selected action
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [picture, setPicture] = useState(null);

//   const handleSelectItem = (e) => {
//     const index = parseInt(e.target.value, 10); // Convert to integer
//     setSelectedIndex(index);
//     setName(menuItems[index]?.name || '');
//     setPrice(menuItems[index]?.price || '');
//     setPicture(menuItems[index]?.picture || null);
//     setAction(''); // Reset action on food selection
//   };

//   const handleActionChange = (e) => {
//     setAction(e.target.value);
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPicture(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleReplace = () => {
//     if (selectedIndex !== null && name && price && picture) {
//       const newItem = { name, price, picture };
//       onReplace(selectedIndex, newItem);
//       resetForm();
//     }
//   };

//   const handleDelete = () => {
//     if (selectedIndex !== null) {
//       onDelete(selectedIndex);
//       resetForm();
//     }
//   };

//   const resetForm = () => {
//     setSelectedIndex(null);
//     setName('');
//     setPrice('');
//     setPicture(null);
//     setAction('');
//   };

//   return (
//     <div className="menu-management">
//       <select 
//         className="menu-select" 
//         value={selectedIndex !== null ? selectedIndex : ''} 
//         onChange={handleSelectItem}
//       >
//         <option value="" disabled>Choose Food</option>
//         {menuItems.map((item, index) => (
//           <option key={index} value={index}>
//             {item.name}
//           </option>
//         ))}
//       </select>

//       {selectedIndex !== null && (
//         <select className="action-select" value={action} onChange={handleActionChange}>
//           <option value="" disabled>Choose Action</option>
//           <option value="edit">Edit</option>
//           <option value="delete">Delete</option>
//           <option value="replace">Replace</option>
//         </select>
//       )}

//       {action === 'edit' && (
//         <>
//           <input 
//             type="text" 
//             placeholder="New Name" 
//             value={name} 
//             onChange={(e) => setName(e.target.value)} 
//             className="menu-input" 
//           />
//           <input 
//             type="text" 
//             placeholder="New Price" 
//             value={price} 
//             onChange={(e) => setPrice(e.target.value)} 
//             className="menu-input" 
//           />
//           <input 
//             type="file" 
//             accept="image/*" 
//             onChange={handleImageUpload} 
//             className="menu-input" 
//           />
//           <button className="action-button" onClick={handleReplace}>
//             Save Changes
//           </button>
//         </>
//       )}

//       {action === 'delete' && (
//         <button className="action-button delete-button" onClick={handleDelete}>
//           Delete
//         </button>
//       )}

//       {action === 'replace' && (
//         <>
//           <input 
//             type="text" 
//             placeholder="New Name" 
//             value={name} 
//             onChange={(e) => setName(e.target.value)} 
//             className="menu-input" 
//           />
//           <input 
//             type="text" 
//             placeholder="New Price" 
//             value={price} 
//             onChange={(e) => setPrice(e.target.value)} 
//             className="menu-input" 
//           />
//           <input 
//             type="file" 
//             accept="image/*" 
//             onChange={handleImageUpload} 
//             className="menu-input" 
//           />
//           <button className="action-button" onClick={handleReplace}>
//             Replace
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default MenuManagement;
