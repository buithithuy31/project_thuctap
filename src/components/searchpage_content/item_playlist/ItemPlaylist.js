import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function ItemPlaylist({ handleChangeWidth, item }) {
    const [width, setWidth] = useState(0);
    const itemRef = useRef();
    useEffect(() => {
        const handleResize = () => {
            console.log(itemRef.current.offsetWidth);
            setWidth(itemRef.current.offsetWidth);
            handleChangeWidth(itemRef.current.offsetWidth);
        }
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <div className="playList-item" ref={itemRef}>
            <Link className="card_playlist" to={`/ca-nhan/detail/${item.id}`}>
                <div className="image-item" style={{ height: width ? `${width + 10}px` : `${300 - 60}px` }}>
                    <div className="khongtrong"></div>
                    <img src={item.image || "https://i.scdn.co/image/ab67616d0000b27394ae8395433c0c7521ac25ba"} />
                </div>
            </Link>
            <div className="content-item">
                <Link className="card_playlist" to={`/ca-nhan/detail/${item.id}`}>
                    <h5>{item.name}</h5>
                </Link>
                <p>{item.discription}</p>
            </div>
        </div>
    )
}