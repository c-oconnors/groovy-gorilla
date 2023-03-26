// components/TrackListRow.js
import { signOut, useSession } from "next-auth/react";
import React from 'react';

const TrackListRow = ({ track }) => {
  const { title, artist, album, duration } = track;

  return (
    <div className="flex items-center justify-between py-2 px-4 hover:bg-gray-100">
      <div className="flex items-center space-x-4">
        <img className="w-10 h-10 object-cover" src={session?.album.coverUrl} alt={album.title} />
        {/* {session?.user?.image} */}
        <div className="flex flex-col">
          <p className="font-semibold">{title}</p>
          <p className="text-sm text-gray-600">{artist.name}</p>
        </div>
      </div>
      <p className="text-sm text-gray-600">{album.title}</p>
      <p className="text-sm text-gray-600">{duration}</p>
    </div>
  );
};

export default TrackListRow;
