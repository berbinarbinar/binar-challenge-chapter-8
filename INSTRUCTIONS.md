# Instruksi

Untuk ngerjain challenge 8 ini caranya gampang abiez

1. Bikin dokumentasi pake POSTMAN, udah tau lah caranya gimana, gampang
2. Bikin dokumentasi pake Swagger
   a. `npm i swagger-ui-express swagger-jsdoc`
   b. Ikuti instruksi yang udah gw jelasin soal swagger
   c. Lanjutin bikin comment @swagger di file server/routes/v1/player.routes.js
   d. selesai
3. install react pada root folder alias di dalem binar-cahllenge-chapter-8. Cara install react itu ada beberapa cara, kalau pake npx bisa pake command `npx create-react-app <nama folder>` atau kalau pake yarn bisa `yarn create react-app <nama folder>`
4. Lanjut belajar react dulu

## React

1. Dynamic Value
2. Component (memecah belah menjadi fragmen fragmen html yang lebih kecil, biasa digunakan untuk grouping atau juga membuat sesuatu yang bisa dipakai berulang (reusable component))
   a. cara bikin komponen gak susah, tinggal bikin sebuah function yang punya nama, dimana nama function tadi haruslah Diawali dengan Huruf Besar contoh

   ```js
   // 1.
   const ButtonGanteng = () => {
     return (
       <>
         <button>Button Ganteng</button>
       </>
     );
   };

   // 2.
   const ButtonGanteng = () => <button>Button Ganteng</button>;

   // 3.
   function ButtonGanteng() {
     return (
       <>
         <button>Button Ganteng</button>
       </>
     );
   }
   ```

3. Props (untuk lempar lemparan data antar komponen)

   ```js
   // 1.
   const ButtonGanteng = (props) => {
     // importing
     // 1.
     const namaButton = props.namaButton;
     // 2.
     const { namaButton } = props;

     // 3. props yang ada di parameter, langsung diubah dari
     // (props) jadi ({ namaButton })

     return (
       <>
         <button>{namaButton}</button>
         <button>{props.namaButton}</button>
       </>
     );
   };

   function App() {
     return (
       <div>
         <ButtonGanteng namaButton='Ini Nama Buttonnya' />
       </div>
     );
   }
   ```

   jikalau ingin memindahkan component yang dibuat tadi ke file berbeda, jangan lupa untuk di export, contohnya

   ```js
   export const ButtonGanteng = (props) => {
     // importing
     // 1.
     const namaButton = props.namaButton;
     // 2.
     const { namaButton } = props;

     // 3. props yang ada di parameter, langsung diubah dari
     // (props) jadi ({ namaButton })

     return (
       <>
         <button>{namaButton}</button>
         <button>{props.namaButton}</button>
       </>
     );
   };

   atau;

   const ButtonGanteng = (props) => {
     // importing
     // 1.
     const namaButton = props.namaButton;
     // 2.
     const { namaButton } = props;

     // 3. props yang ada di parameter, langsung diubah dari
     // (props) jadi ({ namaButton })

     return (
       <>
         <button>{namaButton}</button>
         <button>{props.namaButton}</button>
       </>
     );
   };

   export default ButtonGanteng;
   ```
