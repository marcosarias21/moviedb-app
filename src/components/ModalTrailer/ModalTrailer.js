import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './modaltrailer.scss';

const ModalTrailer = ({ results }) => {
  if (!results) return null;

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            {
              results?.slice(0, 1).map((video, i) => (<iframe key={i} className='video-size' src={`https://www.youtube.com/embed/${video?.key}`} allow="autoplay; encrypted-media" allowFullScreen></iframe>))
            }
          </div>
          <div className="modal-footer">
            <button type="button"className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalTrailer;
