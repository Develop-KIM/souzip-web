<template>
  <header class="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
    <nav class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <NuxtLink to="/" class="hover:opacity-80 transition-opacity">
        <img
          src="../public/sou.zip.png"
          alt="sou.zip"
          class="h-10 md:h-12 w-auto"
        />
      </NuxtLink>
      
      <div class="hidden md:flex items-center gap-8">
        <a href="/#features" class="text-gray-600 hover:text-gray-900 transition-colors">
          기능
        </a>
        <!-- <a href="/#download" class="text-gray-600 hover:text-gray-900 transition-colors">
          다운로드
        </a>
        <a href="/#waitlist" class="text-gray-600 hover:text-gray-900 transition-colors">
          사전등록
        </a> -->
      </div>
      
      <button
        class="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        @click="mobileMenuOpen = !mobileMenuOpen"
        aria-label="메뉴"
      >
        <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </nav>
    
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-200 bg-white">
        <div class="px-4 py-4 space-y-4">
          <a
            href="/#features"
            class="block text-gray-600 hover:text-gray-900 py-2"
            @click="mobileMenuOpen = false"
          >
            기능
          </a>
          <!-- <a
            href="/#download"
            class="block text-gray-600 hover:text-gray-900 py-2"
            @click="mobileMenuOpen = false"
          >
            다운로드
          </a>
          <a
            href="/#download"
            class="block w-full px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all text-center"
            @click="mobileMenuOpen = false"
          >
            앱 다운로드
          </a> -->
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false)

if (process.client) {
  watch(() => mobileMenuOpen.value, (newVal) => {
    if (newVal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  })
}

onUnmounted(() => {
  if (process.client) {
    document.body.style.overflow = ''
  }
})
</script>
