<template>
  <v-app>
    <!-- 顶部导航，父组件定位提供容器，引入封装的导航组件 -->
    <v-app-bar height="56px" elevation="12" fixed class="nav-transparent">
      <nav-bar></nav-bar>
    </v-app-bar>
    <!-- 主体内容 -->
    <v-main>
      <v-carousel cycle height="900" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet height="100%">
            <v-row class="fill-height header">
              <img :src="slide.src" class="slider-img"/>
              <!-- 引入封装的顶部导航组件 -->
              
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>

      <v-row style="width: 80%; margin:0 auto; margin-top:-80px;">
        <v-col cols="12" md = "6" v-for="(card, index) in cards" :key="index">
          <v-card v-if="index < 4">
            <v-img class="white--text" height="450px" :src="card.bgImg">
              <v-card-title>{{card.title}}</v-card-title>
            </v-img>
            <v-card-text class="text--primary"> 
              <div>{{card.content}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="orange" text>
                Share
              </v-btn>
              <v-btn color="orange" text>
                Explore
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-row style="width:80%; margin:0 auto;">
        <v-col cols="12" md="4" v-for="(card, index) in cards" :key="index">
          <v-card>
            <v-img class="white--text align-end" height="300px" :src="card.bgImg"> 
              <v-card-title>{{card.title}}</v-card-title>
            </v-img>
            <v-card-text class="text--primary">
              <div>{{card.content}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="orange" text>
                Share
              </v-btn>
              <v-btn color="orange" text>
                Explore
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-main>
    <my-footer></my-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import NavBar from '../components/NavBar'
import MyFooter from '../components/MyFooter'
export default {
  name: 'Index',
  data: () => ({
    cards: [],
    slides: [
      {
        src: 'http://bnnbucket.oss-cn-hangzhou.aliyuncs.com/avatar/img01.jpg'
      },
      {
        src: 'http://bnnbucket.oss-cn-hangzhou.aliyuncs.com/avatar/bg1.jpg'
      },
      {
        src: 'http://bnnbucket.oss-cn-hangzhou.aliyuncs.com/avatar/14.jpg'
      },
      {
        src: 'http://bnnbucket.oss-cn-hangzhou.aliyuncs.com/avatar/15.jpg'
      },
    ]
  }),
  components: {
    NavBar,
    MyFooter
  },
  computed: {
    ...mapState({
      loginStatus: (state) => state.loginStatus,
      user: (state) => state.user
    })
  },
  created() {
    this.axios.get('/cards').then((res) => {
      console.log(res.data.data)
      this.cards = res.data.data
    })
  }
}
</script>
<style lang="scss" scoped>
.nav-transparent{
  background-color: transparent !important;
  background-image: none;
  box-shadow: none;
}
 .slider-img{
  height: 900px;
  width: 100%;
  object-fit: cover;
} 

</style>
