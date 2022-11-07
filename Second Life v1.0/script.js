// DOM
const swiper = document.querySelector('#swiper');
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');

// constants
const urls = [
  'https://apollo-virginia.akamaized.net/v1/files/a3k2p2amawpj1-CO/image;s=1080x1080',
  'https://colombia.tiendacelular.com/oc-content/uploads/847/1542227.jpg',
  'https://http2.mlstatic.com/D_NQ_NP_2X_830615-MCO52151781824_102022-F.webp',
  'https://caracoltv.brightspotcdn.com/dims4/default/9f0e16d/2147483647/strip/true/crop/650x466+0+0/resize/650x466!/format/webp/quality/90/?url=https%3A%2F%2Fcaracol-brightspot.s3-us-west-2.amazonaws.com%2Fassets%2Fbluradio%2Fpush_images%2Fbluradio.celular-foto-afp1_0.png',
  'https://http2.mlstatic.com/D_NQ_NP_2X_887938-MCO43294943718_082020-F.webp'
];

// variables
let cardCount = 0;

// functions
function appendNewCard() {
  const card = new Card({
    imageUrl: urls[cardCount % 5],
    onDismiss: appendNewCard,
    onLike: () => {
      like.style.animationPlayState = 'running';
      like.classList.toggle('trigger');
    },
    onDislike: () => {
      dislike.style.animationPlayState = 'running';
      dislike.classList.toggle('trigger');
    }
  });
  swiper.append(card.element);
  cardCount++;

  const cards = swiper.querySelectorAll('.card:not(.dismissing)');
  cards.forEach((card, index) => {
    card.style.setProperty('--i', index);
  });
}

// first 5 cards
for (let i = 0; i < 5; i++) {
  appendNewCard();
}