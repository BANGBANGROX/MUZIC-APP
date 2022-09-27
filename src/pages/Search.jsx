import { Error, Loader, SongCard } from "../components";
import { useParams } from "react-router-dom";
import { useGetSongsBySearchQuery } from '../redux/services/shazaamCore';
import { useSelector } from "react-redux";

const Search = () => {
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsBySearchQuery({ searchTerm });
  const songs = data?.tracks?.hits?.map((song) => song.track);

  if (isFetching) return <Loader title="Loading songs around you..." />

  if (error) <Error />


  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Showing results for{" "}
        <span className="font-black">{searchTerm}</span>
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs?.map((song, i) => <SongCard key={song.key} song={song} isPlaying={isPlaying} data={data} i={i} activeSong={activeSong} />)}
      </div>
    </div>
  )
};

export default Search;
