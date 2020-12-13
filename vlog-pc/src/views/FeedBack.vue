<template>
  <v-card
    class="elevation-16 mx-auto"
    width="300"
  >
    <v-card-title
      class="headline"
      primary-title
    >
      请为我们的服务打星
    </v-card-title>
    <v-card-text>
      请为我们的服务打分并可以写下您的建议，我们将在工作日时间为您解决问题，谢谢！

      <div class="text-center mt-12">
        <v-rating
          v-model="rating"
          color="yellow darken-3"
          background-color="grey darken-1"
          empty-icon="$ratingFull"
          half-increments
          hover
        ></v-rating>
      </div>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions class="justify-space-between">
      <v-btn text>No Thanks</v-btn>
      <v-btn
        color="primary"
        text
      >
        Rate Now
      </v-btn>
    </v-card-actions>
  </v-card>
</template>