<template>
  <footer class="bg-gray-50 border-t border-gray-200">
    <div class="max-w-6xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- 로고 및 소개 -->
        <div>
          <NuxtLink to="/" class="inline-block mb-4">
            <img
              src="../public/sou.zip.png"
              alt="sou.zip"
              class="h-10 w-auto"
            />
          </NuxtLink>
          <p class="text-gray-600 text-sm">
            여행의 순간을 담는<br>
            특별한 기념품 추천 서비스
          </p>
        </div>
        
        <!-- 서비스 링크 -->
        <div>
          <h3 class="font-semibold text-gray-900 mb-4">서비스</h3>
          <ul class="space-y-2">
            <li>
              <a href="/#features" class="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                주요 기능
              </a>
            </li>
            <!-- <li>
              <a href="/#download" class="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                앱 다운로드
              </a>
            </li> -->
          </ul>
        </div>
        
        <!-- 법적 고지 -->
        <div>
          <h3 class="font-semibold text-gray-900 mb-4">법적 고지</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/terms" class="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                서비스 이용약관
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/privacy" class="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                개인정보처리방침
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/location-terms" class="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                위치기반서비스 이용약관
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/marketing-terms" class="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                마케팅 정보 수신 동의
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- 구분선 -->
      <div class="border-t border-gray-200 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <!-- 저작권 정보 -->
          <p class="text-gray-500 text-sm">
            © 2026 sou.zip. All rights reserved.
          </p>
          
          <!-- 연락처 정보 -->
          <div class="flex items-center gap-4 text-sm text-gray-500">
            <span>문의: team.sou.zip@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>
