<script>
export default {
  props: {
    post: {
      postTitle: "",
      postDesc: "",
      postDate: "",
    },
  },
  methods: {
    handleClick() {
      this.$emit("like", this.post);
    },
  },
  emits: ["like"],
};
</script>

<template>
  <div class="container p-3">
    <div class="flex flex-wrap justify-between gap-2">
      <div class="max-w-sm bg-white">
        <div class="hidden md:block">
          <img src="../assets/posts.jpg" alt="post-img" />
        </div>
        <div
          class="flex flex-col gap-3 p-6 text-center border border-yellowb text-secondary"
        >
          <div>
            <p class="mb-4 text-2xl font-extrabold">{{ post.postTitle }}</p>
            <p class="italic text-slate-500">---{{ post.postDate }}</p>
          </div>
          <div class="hidden lg:block">
            <div class="w-full h-[1px] bg-yellowb"></div>
            <div class="mt-3 text-xl">
              {{ post.postDesc }}
            </div>
          </div>

          <div>
            <button
              @click="handleClick"
              class="px-4 py-1 border-2 border-yellowb italic hover:bg-[#c2c286] hover:text-white"
            >
              <span class="fa-solid fa-thumbs-up"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
