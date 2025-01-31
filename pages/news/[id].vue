<script setup>
useHead({
  title: "Read News",
  meta: [
    {
      name: "description",
      content: "Read Page",
    },
  ],
});

import { ref, reactive, onMounted } from "vue";
import { useRoute } from 'vue-router';
import news1 from '@/assets/img/news1.jpeg';
import news2 from '@/assets/img/news2.jpg';
import news3 from '@/assets/img/news3.jpg';

const loading = ref(true);

const articles = reactive([
  {
    id: 1,
    title: 'Asirindo Laporkan 15 Pengusaha Karaoke Pengguna Lagu Tanpa Izin',
    excerpt: '“Hingga saat ini ada sekitar 15 pengusaha karaoke lainnya di Jawa, selain di Yogyakarta seperti di Jakarta, Surabaya, dan Karawang,”',
    image: news1,
    content: 'Ungkap General Manager Legal Asirindo, Braniko Indhyar di Sleman, DIY, Rabu. Sebenarnya Asirindo sudah melakukan pendekatan dan menerangkan bahwa mereka melanggar hak ekonomi produser rekaman dalam UU nomor 28 tahun 2014 tentang Hak Cipta. Sayangnya maksud baik tidak mendapat sambutan dari para pemilik dan pengelola tempat karaoke tersebut. Braniko juga menambahkan, kerugian produser rekaman yang timbul dari permasalahan ini berkisar 500 juta hingga 5 miliar rupiah. Lewat teleconference penyanyi, Marcell Siahaan pun ikut menyayangkan para pengusaha karaoke yang melanggar kewajibannya. Dia menyebut tindakan pelanggaran hak cipta ini memalukan.'
  },
  {
    id: 2,
    title: 'Asirindo Tunjuk Musik Hub untuk Konten Musik Indonesia yang Legal',
    excerpt: '“PT. AS Industri Rekaman Indonesia (Asirindo) telah menunjuk PT. Musik Hub Indonesia (MHI) untuk menyediakan musik Indonesia yang resmi dan legal. ,”',
    image: news2,
    content: 'Dalam siaran pers, Selasa (11/1/2022), MHI menjadi perwakilan resmi untuk mendistribusikan musik milik Asirindo, dan sekaligus mengumpulkan hak-hak mekanis dari seluruh pelaku usaha Indonesia yang memutar musik untuk konsumennya.Musik Hub bangga dipilih oleh Asirindo menjadi perwakilan resmi mereka. Teknologi kami akan membantu mengedukasi dan memungkinkan masyarakat dan industry bisnis untuk mengakses musik terbaik Indonesia dengan biaya yang efektif dan efisien, tanpa khawatir melanggar undang-undang hak cipta secara tidak sengaja,Asirindo menunjuk Musik Hub untuk membantu mengamankan royalti bagi artis local di mana Asirindo mewakili sebagian besar label musik Indonesia, di mana sebagian besar band/ grup musik dan musisi besar tanah air dikelola.'
  },
  {
    id: 3,
    title: 'PT. Asirindo Ungkap Pelanggaran HAKI Bos Karaoke Rasa Sayang',
    excerpt: '“Pelanggaran hak cipta yang yang menjerat Bos Karaoke Rasa Sayang, Ivan Kuncoro memasuki babak pembuktian pokok perkara setelah eksepsinya ditolak oleh majelis hakim pemeriksa perkara melalui amar putusan sela yang dibacakan Kamis (2/1/2020) lalu. Surabaya, dan Karawang,”',
    image: news3,
    content: 'Dalam sidang pembuktian pokok perkara ini, Jaksa Penuntut Umum (JPU) Novan Arianto menghadirkan tiga saksi dari PT Asosiasi Industri Rekaman Indonesia (PT Asirindo) yakni Yessy Kurniawan, Untung Agustanto dan Jusak Irwan Sutiono.Sebelum bersaksi, disumpah dulu yaujar Ketua majelis hakim Mashuri Effendi pada para saksi diruang sidang Garuda 1 Pengadilan Negeri (PN) Surabaya, Kamis (9/1/2020).Usai disumpah, Saksi Yessy Kurniawan mendapatkan giliran pertama untuk memberikan keterangan. Saat bersaksi, Yessy mengaku sebagai pelapor, Ia mendapat kuasa untuk melaporkan ke Polda Jatim terkait adanya pelanggaran hak eksklusif berupa pemutaran lagu lagu rekaman milik anggota PT Asirindo disalah satu rumah karaoke yang dikelola oleh PT Rasa Sayang.'
  },
]);

const route = useRoute();
const articleId = ref(route.params.id);
const article = ref(null);

onMounted(() => {
  article.value = articles.find(a => a.id === parseInt(articleId.value));
  setTimeout(() => {
    loading.value = false;
  }, 2000);
});
</script>

<template>
  <div class="h-[30vh] w-full relative mb-5 shadow-md flex items-center justify-center">
    <div>
      <div v-if="loading">
        <div v-for="n in skeletonCount" :key="n"
          class="bg-gray-500 border-2 border-gray-100 rounded-md mb-4 p-4 flex items-center">
          <div class="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
          <div class="flex-1">
            <div class="w-3/4 h-4 bg-gray-300 rounded-md mb-2"></div>
            <div class="w-1/2 h-3 bg-gray-300 rounded-md"></div>
          </div>
        </div>
      </div>

      <div v-else>
        <img src="assets/img/news3.webp" alt="foto-persyaratan1" class="w-full h-full object-cover absolute inset-0" />
        <div class="absolute inset-0 bg-black opacity-60" />
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
          <h1 class="text-white text-4xl font-semibold z-10 text-center">
            {{ $t ("readnews") }}
          </h1>
          <h4 class="text-white text-base sm:text-lg font-semibold z-10 text-center">
            <nuxt-link to="/" class="text-white hover:text-yellow-100">{{ $t ("home") }}</nuxt-link>
            >
            <nuxt-link to="/news" class="text-yellow-400">{{ $t ("readnews") }}</nuxt-link>
          </h4>
        </div>
      </div>
    </div>
  </div>
  <div>
    <!-- Blog Article -->
    <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto" v-if="article">
      <div class="max-w-2xl">
        <!-- Content -->
        <div class="space-y-5 md:space-y-8">
          <div class="space-y-3">
            <h2 class="text-2xl font-bold md:text-3xl">
              {{ article.title }}
            </h2>

            <p class="text-lg text-gray-800">
              {{ article.excerpt }}
            </p>
          </div>

          <figure>
            <img class="w-full object-cover rounded-xl" :src="article.image" alt="Blog Image" />
          </figure>

          <p class="text-lg text-gray-800">
            {{ article.content }}
          </p>
        </div>
        <!-- End Content -->
      </div>
    </div>
    <!-- End Blog Article -->
  </div>
</template>