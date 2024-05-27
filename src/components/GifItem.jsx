
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { FaDownload } from "react-icons/fa6";
import { saveAs } from 'file-saver';

const handleDownload = (url) => {
  saveAs(url, 'download.gif');
};
export const GifItem = ({title, url, id}) => {

  return (
    <div className="card mt-5">
        <img src={url} alt={title}/>
        <p>{title}</p>
        <button type="button" onClick={() => handleDownload(url)}>
                  
                <FaDownload className='Download-icon' />
                </button>
            
    </div>
  )
}
