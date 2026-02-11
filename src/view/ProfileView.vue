<script setup>
import ProfileSummary from "@/components/profile/ProfileSummary.vue";
import ReviewPreview from "@/components/profile/ReviewPreview.vue";
import PageButtons from "@/components/page-buttons/PageButtons.vue";
import {ref} from "vue";
import Divider from "@/components/divider/Divider.vue";
const props = defineProps({
  profileBio: {
    type: String,
    default: "Hi, I am a student!",
  }
});

const reviews = ref([
  { id: 1, title: 'Fantastic stay!', rating: '5.0', review: 'Loved the place.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToYIB-2sFxlKxfD7--keSHhJfc6LnQJmwDwg&s'},
  { id: 2, title: 'Lowkenuinely Mid', rating: '3.5', review: 'It was alright.', img: 'https://i.pinimg.com/736x/a9/7b/bb/a97bbbb18ff8a278542bf62308d722d2.jpg'},
  { id: 3, title: 'It\'s A Bit Kirky At Night', rating: '2.0', review: 'Counting or not counting music at night?', img:'https://i.pinimg.com/736x/0f/39/ea/0f39ea017f6bbc2313a698f94cb6e6f8.jpg'},
  { id: 4, title: 'Cleaner Than Y403', rating: '4.5', review: 'Very tidy.', img: 'https://i.pinimg.com/1200x/2c/6f/03/2c6f035e8736fd15a9c2ef04b52d8856.jpg'},
  { id: 5, title: 'The Host was Gorjus', rating: '5.0', review: 'The host was kazuha from lesserafim wth.', img: 'https://i.pinimg.com/1200x/99/a4/6d/99a46de762454ef0f8897bf09f17f2f1.jpg'},
]);

const emit = defineEmits(['edit'])
</script>

<template>
  <div class="flex flex-col items-start p-[40px] gap-10 w-full max-w-[1280px] min-h-[856px] mx-auto z-[1]">

    <ProfileSummary></ProfileSummary>

    <!-- Biography and Reviews Container -->
    <div class="flex flex-row flex-wrap justify-center items-start gap-[40px] w-full max-w-[1200px] min-h-[586px] mx-auto">
      <!-- Profile info column -->
      <div class="flex flex-col justify-between items-start gap-5 w-full max-w-[580px]">
        <!-- Biography and edit container -->
        <div class="flex flex-row justify-between items-start gap-5 w-full max-w-[580px] h-[29px] self-stretch flex-none order-0">
          <h2 class="font-semibold text-[24px] leading-[29px] text-black dark:text-white">
            Biography
          </h2>

          <!-- Edit button-->
          <button
              @click="emit('edit')"
              class="flex flex-row items-center px-[15px] py-[5px] gap-[10px] bg-[#355AFF] rounded-[25px] hover:bg-[#2C0ED6] transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M0 11.25V14H2.75L10.8625 5.8875L8.1125 3.1375L0 11.25ZM13.0375 3.7125C13.325 3.425 13.325 2.9625 13.0375 2.675L11.325 0.9625C11.0375 0.675 10.575 0.675 10.2875 0.9625L8.9 2.35L11.65 5.1L13.0375 3.7125Z" fill="white"/>
            </svg>
            <span class="text-[16px] leading-[19px] text-white">Edit</span>
          </button>
        </div>
          <!-- Bio text container -->
          <span class="text-[16px] leading-[19px] dark:text-white">{{ profileBio }}</span>
        <!-- separator -->
        <Divider></Divider>

        <!-- Profile details container-->
        <div class="flex flex-col items-start gap-[20px] w-full max-w-[580px] min-h-[157px] flex-none order-2 self-stretch">

          <!-- Education details -->
          <div class="flex flex-row items-center gap-5 w-full max-w-[580px] h-[39px] self-stretch flex-none order-0">

            <div class="w-[100px] font-semibold text-[20px] leading-[24px] text-right text-[#355AFF] flex-none">
              School
            </div>

            <div class="flex flex-col justify-center items-center w-[30px] h-[30px] flex-none order-1">
              <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10.18V14.18L11 18L18 14.18V10.18L11 14L4 10.18ZM11 0L0 6L11 12L20 7.09V14H22V6L11 0Z" fill="#355AFF"/>
              </svg>
            </div>

            <div class="flex flex-col justify-center items-start gap-[5px] h-[39px] flex-none order-2">
              <span class="font-semibold text-[16px] leading-[19px] text-black dark:text-white">
                De La Salle University
              </span>
              <span class="italic font-normal text-[12px] leading-[15px] text-[#676767]">
              Since 2024
              </span>
            </div>

          </div>

          <!-- Dorm details -->
          <div class="flex flex-row items-center gap-5 w-full max-w-[580px] h-[39px] self-stretch flex-none order-0">

            <div class="w-[100px] font-semibold text-[20px] leading-[24px] text-right text-[#355AFF] flex-none">
              Home
            </div>

            <div class="flex flex-col justify-center items-center w-[30px] h-[30px] flex-none order-1">
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0L0 7V21H20V7L10 0ZM7.1875 11.0833C8.05 11.0833 8.75 11.7367 8.75 12.5417C8.75 13.3467 8.05 14 7.1875 14C6.325 14 5.625 13.3467 5.625 12.5417C5.625 11.7367 6.325 11.0833 7.1875 11.0833ZM16.25 17.5H15V15.75H5V17.5H3.75V9.33333H5V14.5833H9.375V10.5H13.75C15.125 10.5 16.25 11.55 16.25 12.8333V17.5Z" fill="#355AFF"/>
              </svg>
            </div>

            <div class="flex flex-col justify-center items-start gap-[5px] h-[39px] flex-none order-2">
              <a class="font-semibold text-[16px] leading-[19px] text-black underline dark:text-white">
                Some Other Fantastic Dorm
              </a>
              <span class="italic font-normal text-[12px] leading-[15px] text-[#676767]">
              Since 2024
              </span>
            </div>

          </div>

          <!-- Review details -->
          <div class="flex flex-row items-center gap-5 w-full max-w-[580px] h-[39px] self-stretch flex-none order-0">

            <div class="w-[100px] font-semibold text-[20px] leading-[24px] text-right text-[#355AFF] flex-none">
              Reviews
            </div>

            <div class="flex flex-col justify-center items-center w-[30px] h-[30px] flex-none order-1">
              <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.86144 0.690965C9.1608 -0.230345 10.4642 -0.230344 10.7636 0.690967L12.3944 5.71022C12.5283 6.12224 12.9122 6.4012 13.3455 6.4012H18.623C19.5917 6.4012 19.9945 7.64082 19.2108 8.21022L14.9412 11.3123C14.5907 11.5669 14.444 12.0183 14.5779 12.4303L16.2088 17.4496C16.5081 18.3709 15.4536 19.137 14.6699 18.5676L10.4003 15.4655C10.0498 15.2109 9.5752 15.2109 9.22471 15.4655L4.95508 18.5676C4.17137 19.137 3.11689 18.3709 3.41624 17.4496L5.0471 12.4303C5.18097 12.0183 5.03431 11.5669 4.68382 11.3123L0.41419 8.21022C-0.369523 7.64082 0.0332539 6.4012 1.00198 6.4012H6.27953C6.71276 6.4012 7.09671 6.12224 7.23059 5.71022L8.86144 0.690965Z" fill="#355AFF"/>
              </svg>
            </div>

            <div class="flex flex-col justify-center items-start gap-[5px] h-[39px] flex-none order-2">
              <span class="font-semibold text-[16px] leading-[19px] text-black dark:text-white">
                67,676,767
              </span>
              <span class="italic font-normal text-[12px] leading-[15px] text-[#676767]">
              Since June 7th, 2026
              </span>
            </div>

          </div>
        </div>
      </div>

      <!-- Reviews column -->
      <div class="flex flex-col justify-center items-center gap-[20px] w-full max-w-[580px] min-h-[586px] grow order-1">

        <div class="font-semibold text-[24px] leading-[29px] text-black w-full dark:text-white">
          Reviews
        </div>

        <div class="flex flex-col w-full gap-[20px]">
          <ReviewPreview
              v-for="review in reviews"
              :key="review.id"
              :title="review.title"
              :rating="review.rating"
              :review="review.review"
              :img="review.img"
          />
        </div>

        <div class="flex justify-center items-center w-full mt-auto">
          <PageButtons />
        </div>

      </div>

    </div>
  </div>
</template>