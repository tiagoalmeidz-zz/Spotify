import React, { useEffect, useState } from "react";
import { Columns, Heading } from "react-bulma-components";
import styled from "styled-components";
import AlbumsService from "../../services/album";
import Album from "../album";

const DivVSpaced = styled.div`
  margin-top: 50px;
`;

const Discovery = () => {
  const [recentAlbums, setRecentAlbums] = useState([]);
  const [recommendedAlbums, setRecommendedAlbums] = useState([]);

  async function fetchAlbums() {
    const response = await AlbumsService.index();
    setRecentAlbums(response.data.recent_albums);
    setRecommendedAlbums(response.data.recommend_albums);
  }

  useEffect(() => {
    fetchAlbums();
  }, []);

  const recentAlbumsComponents = recentAlbums.map((album, key) => (
    <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
      <Album
        artist_name={album.artist_name}
        title={album.title}
        cover_url={album.cover_url}
        id={album.id}
      />
    </Columns.Column>
  ));

  const recommendedAlbumsComponents = recommendedAlbums.map((album, key) => (
    <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
      <Album
        artist_name={album.artist_name}
        title={album.title}
        cover_url={album.cover_url}
        key={key}
        id={album.id}
      />
    </Columns.Column>
  ));

  return (
    <>
      {recentAlbumsComponents.length > 0 && (
        <div>
          <Heading className="has-text-white" size={4}>
            Tocadas recentemente
          </Heading>
          <Columns className="is-mobile">{recentAlbumsComponents}</Columns>
        </div>
      )}

      {recommendedAlbumsComponents.length > 0 && (
        <DivVSpaced>
          <Heading className="has-text-white" size={4}>
            Recomendadas
          </Heading>
          <Columns className="is-mobile">{recommendedAlbumsComponents}</Columns>
        </DivVSpaced>
      )}
    </>
  );
};
export default Discovery;
