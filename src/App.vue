<template>
  <div id="app">
    <Table :columns="columns" :data="voiceList" />
  </div>
</template>

<script>
import { getVoiceList } from "./api/voice";

export default {
  name: "App",
  data() {
    return {
      columns: [
        {
          title: "名字",
          align: "center",
          key: "name",
        },
        {
          title: "封面",
          align: "center",
          key: "cover",
          render: (h, { row }) => {
            return h(
              "img",
              {
                style: {
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                },
                attrs: {
                  src: `//${row.cover}`,
                },
              },
              []
            );
          },
        },
        {
          title: "voiceRealUrl",
          align: "center",
          key: "voiceRealUrl",
          render: (h, { row }) => {
            return h(
              "audio",
              {
                attrs: {
                  controls: true,
                  src: row.voiceRealUrl,
                },
              },
              []
            );
          },
        },
      ],
      voiceList: [],
    };
  },
  async mounted() {
    const { data } = await getVoiceList();
    console.log("voiceList: ", data);
    this.voiceList = data;
  },
};
</script>

<style>
#app {
}
</style>
