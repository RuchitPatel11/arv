<script>
import Post from "./Post.vue";
export default {
  components: {
    Post,
  },
  data() {
    return {
      postTitle: "",
      postDesc: "",
      postdate: "",
      likedPosts: [],
      isLiked: false,
      posts: [
        {
          postTitle: "Share Your Experience",
          postDesc:
            "Share Your Experience...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
          postDate: "20 November 2022",
        },
        {
          postTitle: "Get Use to it. Make it a Weapon",
          postDesc:
            "Kindly, Get use to it...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
          postDate: "18 October 2022",
        },
        {
          postTitle: "Change the World with Innovations",
          postDesc:
            " BE active and Change the world with Innovative ideasLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley  ",
          postDate: "17 September 2022",
        },
      ],
    };
  },

  methods: {
    addPosts() {
      this.posts.push({
        postTitle: this.postTitle,
        postDesc: this.postDesc,
        postDate: new Date().toLocaleDateString("en-in", {
          month: "long",
          day: "2-digit",
          year: "numeric",
        }),
      });
    },
    handleLike(post) {
      const index = this.likedPosts.findIndex((value) => value == post);
      if (index < 0) this.likedPosts.push(post);
      else this.likedPosts.splice(index, 1);
    },
    seeLiked() {
      this.isLiked = this.isLiked ? false : true;
    },
  },
};
</script>
<template>
  <div class="container flex flex-col max-w-4xl gap-6">
    <h1 class="text-4xl text-center text-green-600">Create Post</h1>
    <div class="gap-2 d-flex col-md-6">
      <label
        class="block mb-2 text-lg font-bold text-gray-700 text-bold"
        for="posttitle"
      >
        Post Title:
      </label>
      <input
        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        id="posttitle"
        type="text"
        placeholder="Post Heading"
        v-model="postTitle"
      />
    </div>
    <div class="gap-2 d-flex col-md-6">
      <label
        for="postdesc"
        class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
        >Post Description:
      </label>
      <textarea
        id="postdesc"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600"
        placeholder="Write your thoughts here..."
        v-model="postDesc"
      ></textarea>
    </div>
    <div>
      <button
        @click="addPosts"
        class="px-4 py-2 font-bold text-white bg-yellow-600 rounded-full hover:bg-red-500"
      >
        Create Post
      </button>
    </div>
  </div>

  <div class="mt-10">
    <h2 class="text-4xl text-blue-800">Posts So Far..</h2>
    <div class="flex flex-wrap mt-5">
      <div class="flex flex-wrap w-2/3">
        <div v-for="post of posts" class="w-1/2">
          <Post :post="post" @like="handleLike" />
        </div>
      </div>
      <div class="w-1/3">
        <div class="text-3xl text-red-500">Count: {{ likedPosts.length }}</div>
        <div>
          <a
            href="#"
            @click="seeLiked"
            class="text-xl text-blue-500 underline hover:text-purple-500"
            >See Liked Posts</a
          >
          <div v-if="isLiked">
            <div v-for="post of likedPosts">
              <Post :post="post" @like="handleLike" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
