import { useState } from 'react'
import { folders, protocolsDB } from './assets/db.js'
import Search from './Search.jsx'

const List = () => {

  const [protocols, setProtocols] = useState(protocolsDB.filter((protocol) => protocol.folder_id === 1))
  const [folderDropdown, setFolderDropdown] = useState(1);
  const [disableFolder, setDisableFolder] = useState(false);

  const handleFolderFilter = (e) => {
    setFolderDropdown(e);
    let result = protocolsDB.filter((protocol) => protocol.folder_id === parseInt(e));
    setProtocols(result);
  }

  const handleSearch = (e) => {
    if (e === '') {
      setDisableFolder(false);
      setFolderDropdown(1);
      handleFolderFilter(1);
    } else {
      setDisableFolder(true);
      let result = protocolsDB.filter((protocol) => protocol.name.toLowerCase().startsWith(e.toLowerCase()))
      setProtocols(result);
    }
  }

  return (
    <div className="h-100 p-3 overflow-auto">
      <div className="mb-3">
        <h3> Protocols List</h3>
      </div>
      <div className="mb-3">
        <select name="folder" id="folder" value={folderDropdown} disabled={disableFolder} onChange={(e) => handleFolderFilter(e.target.value)} className="form-select">
          {folders.map((folder) => <option value={folder.id} key={folder.id}> {folder.folderName} </option>)}
        </select>
      </div>
      <div className="mb-3">
        <Search handleSearch={handleSearch} />
      </div>
      <div className='border table-container overflow-auto rounded-3'>
        <table className='w-100'>
          <colgroup>
            <col style={{ width: '200px' }} />
            <col style={{ width: '500px' }} />
          </colgroup>
          <thead>
            <tr>
              <th> Protocol Name </th>
              <th> Protocols </th>
            </tr>
          </thead>
          <tbody>
            {
              protocols.length !== 0 ? protocols.map((protocol) => (
                <tr key={protocol.id}>
                  <td> {protocol.name}  </td>
                  <td> {protocol.points}  </td>
                </tr>
              )) :
                <tr>
                  <td colSpan={2}> No Protocols found </td>
                </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default List