<template>
  <div class="home">
    <div class="top-banner"></div>
    <hr />
    <h1>Voir toutes les offres >></h1>
    <div class="bottom-banner">
      <div v-for="data in cardData" class="card">
        <div class="card-top">
          <div class="card-img">
            <img :src="data.img" alt="" />
          </div>
          <div class="card-competence">
            <ul class="list-container">
              <li v-for="competence in data.competences" class="list">
                {{ competence }}
              </li>
            </ul>
          </div>
        </div>
        <div class="card-bottom">
          <div class="card-description">
            <h3>Description du poste</h3>
            <p>{{ data.description }}</p>
          </div>
          <div class="card-button">
            <button>Voir plus</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

const cardData = [
  {
    id: 1,
    description:
      "Ici y'a la description de l'offre Ici y'a la description de l'offre Ici y'a la description de l'offre",
    img: "https://assets-jpcust.jwpsrv.com/thumbnails/2yzd2pt3-1920.jpg",
    competences: [
      "Angular",
      "React",
      "React",
      "VueJS",
      "UX/UI",
      "React",
      "React",
    ],
  },
  {
    id: 2,
    description: "Ici y'a la description de l'offre",
    img: "https://assets-jpcust.jwpsrv.com/thumbnails/2yzd2pt3-1920.jpg",
    competences: ["Angular", "React"],
  },
  {
    id: 3,
    description: "Ici y'a la description de l'offre",
    img: "https://assets-jpcust.jwpsrv.com/thumbnails/2yzd2pt3-1920.jpg",
    competences: ["Angular", "React"],
  },
];

export default {
  name: "Home",
  components: {},
  data() {
    return {
      cardData,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/style/home.scss";
</style>
