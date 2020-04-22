// En la pantalla de detalle aparecerá además de la foto, nombre y especie, el planeta de origen, el número de episodios en los que aparece y si está vivo o muerto

const receiveApiData = () => {
  return fetch('//rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        return {
          id: character.id,
          image: character.image,
          name: character.name,
          specie: character.species,
          planet: character.location.name,
          status: character.status,
          episodes: character.episode,
        };
      });
    });
};

export default receiveApiData;
