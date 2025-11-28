<template>
  <div class="min-h-screen bg-white py-20 px-4">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold mb-8">개인정보처리방침</h1>
      
      <div class="prose prose-lg max-w-none">
        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4">1. 수집하는 개인정보 항목</h2>
          <p class="text-gray-600 mb-4">
            sou.zip은 다음과 같은 개인정보를 수집합니다:
          </p>
          <ul class="list-disc pl-6 text-gray-600 space-y-2">
            <li>이메일 주소</li>
            <li>서비스 이용 기록</li>
            <li>접속 로그, 쿠키, 접속 IP 정보</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4">2. 개인정보의 수집 및 이용 목적</h2>
          <p class="text-gray-600 mb-4">
            수집한 개인정보는 다음의 목적을 위해 사용됩니다:
          </p>
          <ul class="list-disc pl-6 text-gray-600 space-y-2">
            <li>서비스 제공 및 개선</li>
            <li>사전 등록 및 출시 알림</li>
            <li>고객 문의 응대</li>
            <li>맞춤형 여행 기념품 추천</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4">3. 개인정보의 보유 및 이용 기간</h2>
          <p class="text-gray-600 mb-4">
            회원 탈퇴 시 또는 수집 목적 달성 시까지 보유합니다.
          </p>
          <p class="text-gray-600">
            단, 관련 법령에 따라 일정 기간 보관이 필요한 경우 해당 기간 동안 보관합니다.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4">4. 개인정보의 제3자 제공</h2>
          <p class="text-gray-600">
            회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 
            다만, 이용자의 동의가 있거나 법령에 의한 경우는 예외로 합니다.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4">5. 이용자의 권리</h2>
          <p class="text-gray-600 mb-4">
            이용자는 언제든지 다음의 권리를 행사할 수 있습니다:
          </p>
          <ul class="list-disc pl-6 text-gray-600 space-y-2">
            <li>개인정보 열람 요구</li>
            <li>개인정보 수정 요구</li>
            <li>개인정보 삭제 요구</li>
            <li>개인정보 처리 정지 요구</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4">6. 개인정보 보호책임자</h2>
          <p class="text-gray-600 mb-4">
            sou.zip은 개인정보 처리에 관한 업무를 총괄하고, 개인정보 처리와 관련한 이용자의 불만 처리 및 피해 구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
          </p>
          <!-- <p class="text-gray-600">
            문의사항이 있으시면 아래 연락처로 연락 주시기 바랍니다.
          </p>
          <div class="mt-4 p-4 bg-gray-50 rounded-lg">
            <p class="text-gray-700">이메일: privacy@souzip.com</p>
          </div> -->
        </section>

        <section class="mb-8">
          <p class="text-sm text-gray-500">
            본 개인정보처리방침은 2025년 11월 28일부터 적용됩니다.
          </p>
        </section>
      </div>

      <div class="mt-12 pt-8 border-t border-gray-200">
        <NuxtLink to="/" class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          홈으로 돌아가기
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: '개인정보처리방침 - sou.zip',
  meta: [
    { name: 'description', content: 'sou.zip 개인정보처리방침' }
  ]
})
</script>