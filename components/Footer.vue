<template>
  <footer class="bg-gray-50 py-12 md:py-16 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between gap-8 md:gap-12 mb-8 md:mb-12">
        <div>
          <img
            src="../public/sou.zip.png"
            alt="sou.zip"
            class="h-10 sm:h-12 lg:h-14 w-auto mb-3"
          />
          <p class="text-gray-600 text-sm leading-relaxed">
            여행의 순간을 .zip으로
          </p>
        </div>
        
        <div>
          <h4 class="font-semibold text-gray-900 mb-4">정보</h4>
          <div class="space-y-3 text-sm">
            <NuxtLink to="/privacy" class="block text-gray-600 hover:text-gray-900 transition-colors">
              개인정보처리방침
            </NuxtLink>
            <NuxtLink to="/terms" class="block text-gray-600 hover:text-gray-900 transition-colors">
              이용약관
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <div class="pt-6 md:pt-8 border-t border-gray-200">
        <div class="flex flex-row justify-between items-center">
          <p class="text-xs md:text-sm text-gray-500">
            © 2025 sou.zip.<br class="md:hidden" /> All rights reserved.
          </p>
          
          <div class="flex items-center gap-3">
            <a
              href="https://www.instagram.com/sou.zip.app/"
              class="w-10 h-10 bg-gray-100 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 rounded-full flex items-center justify-center transition-all group"
              aria-label="Instagram"
            >
              <svg class="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
