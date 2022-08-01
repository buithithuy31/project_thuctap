import { Route, Routes } from "react-router-dom";

import ProfileContent from "./ProfileContent";
import LibraryPlaylist from "../../components/playlist/library_playlist/LibraryPlaylist.tsx";
import DetailPlaylist from "../../components/playlist/detail_playlist/DetailPlaylist";
import { useSelector } from "react-redux";
import {
  dataSelector,
  myPlayListsSelector,
  userDataSelector,
} from "../../redux/selectors";
import { useNavigate } from "react-router-dom";

import { useLayoutEffect } from "react";

export default function ProfilePage(props) {
  const totalData = useSelector(dataSelector);
  const arrayData = [...totalData].splice(0, 7);
  const myArrayPlaylist = useSelector(myPlayListsSelector);
  const navigate = useNavigate();
  const userData = useSelector(userDataSelector);
  useLayoutEffect(() => {
    if (!userData._id) {
      navigate("/login");
    }
  }, []);

  return (
    <section className="home">
      <Routes>
        <Route
          path="/*"
          element={
            <ProfileContent
              arrayData={arrayData}
              myArrayPlaylist={myArrayPlaylist}
            />
          }
        />
        <Route
          path="/library/playlist/*"
          element={<LibraryPlaylist myArrayPlaylist={myArrayPlaylist} />}
        />
        <Route
          path="/detail/:id"
          element={
            <DetailPlaylist
              arrayData={arrayData}
              myArrayPlaylist={myArrayPlaylist}
            />
          }
        />
      </Routes>
    </section>
  );
}
