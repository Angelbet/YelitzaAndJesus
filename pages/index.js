import Head from 'next/head'
import Image from 'next/image'
import style from '@/styles/Home.module.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from 'react';
import Link from 'next/link';

import Footer from './components/Footer';

import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/style.css';

// Images 
import home_1 from '../public/images/Home/home1_506x569.jpg'
import home_2 from '../public/images/Home/home2_429x360.jpg'
import home_3 from '../public/images/Home/home3_703x712.jpg'
import category_1 from '../public/images/Home/category_1.jpg'
import category_2 from '../public/images/Home/category_2.jpg'
import category_3 from '../public/images/Home/category_3.jpg'

import pt_1 from '../public/images/Home/pt_1.jpg'
import pt_2 from '../public/images/Home/pt_2.jpg'
import pt_3 from '../public/images/Home/pt_3.jpg'
import pt_4 from '../public/images/Home/pt_4.jpg'
import pt_5 from '../public/images/Home/pt_5.jpg'
import pt_6 from '../public/images/Home/pt_6.jpg'
import pt_7 from '../public/images/Home/pt_7.jpg'
import pt_8 from '../public/images/Home/pt_8.jpg'
import pt_9 from '../public/images/Home/pt_9.jpg'
import pt_10 from '../public/images/Home/pt_10.jpg'
import pt_11 from '../public/images/Home/pt_11.jpg'
import pt_12 from '../public/images/Home/pt_12.jpg'
import pt_13 from '../public/images/Home/pt_13.jpg'
import pt_14 from '../public/images/Home/pt_14.jpg'
import pt_15 from '../public/images/Home/pt_15.jpg'
import pt_16 from '../public/images/Home/pt_16.jpg'
import pt_17 from '../public/images/Home/pt_17.jpg'
import pt_18 from '../public/images/Home/pt_18.jpg'
import pt_19 from '../public/images/Home/pt_19.jpg'
import pt_20 from '../public/images/Home/pt_20.jpg'

import arrow from '../public/images/Home/arrow.svg'
import stylish_pools from '../public/images/Home/stylish-pools.png'
import exquisite_foods from '../public/images/Home/exquisite-foods.png'
import amazing_views from '../public/images/Home/amazing-views.png'
import image_20_template from '../public/images/Home/image-20-template.png'
import Diamond_Blue from '../public/images/About/Diamond_Blue.svg'
import left_arrow from '../public/images/Home/left-arrow.png'
import right_arrow from '../public/images/Home/right-arrow.png'
import donts from '../public/images/Home/“.png'



export default function Home() {

  gsap.registerPlugin(ScrollTrigger);

  // Gallery 
  useEffect(() => {
    gsap.to(".effect_1", {
      x: -3700,
      duration: 1,
      ease: 'none',
      scrollTrigger: {
        start: "-=550",
        trigger: ".effect_2",
        toggleActions: "restart pause reverse pause",
        end: '+=1200',
        scrub: 1,
      }
    }
    );
  }, []);

  useEffect(() => {
    gsap.to(".effect_2", {
      x: -3700,
      duration: 1,
      ease: 'none',
      scrollTrigger: {
        start: "-=550",
        trigger: ".effect_2",
        toggleActions: "restart pause reverse pause",
        end: '+=1200',
        scrub: 1,
      }
    }
    );
  }, []);

  useEffect(() => {
    gsap.to(".effect_4", {
      x: -3500,
      duration: 1,
      ease: 'none',
      scrollTrigger: {
        start: "-=520",
        trigger: ".effect_3",
        toggleActions: "restart pause reverse pause",
        end: '+=1100',
        scrub: 1,
      }
    }
    );
  }, []);

  useEffect(() => {
    gsap.to(".effect_3", {
      x: -3500,
      duration: 1,
      ease: 'none',
      scrollTrigger: {
        start: "-=520",
        trigger: ".effect_3",
        toggleActions: "restart pause reverse pause",
        end: '+=1100',
        scrub: 1,
      }
    }
    );
  }, []);


  return (
    <>
      <Head>
        <title>Yelitza & Jesús</title>
        <meta name="description" content="Propiedad digital de GaleryAn" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className={style.overflow}>

        <div className={style.page_wrapper}>

          {/* S1 */}
          <div className={style.hero_section}>
            <div className={style.roadmap_shape_left} />
            <div className={style.roadmap_shape_right} />

            <div className={`${style.container} ${style.w_container}`}>
              <div className={style.hero_inner}>
                <div
                  id={style["w-node-_3c19c017-cc3c-97c6-42ec-4a6aba7d1b7d-fbe143f2"]}
                  className={style.hero_top}
                >
                  <div className={style.top_left}>
                    <h1 className={`${style.hero_title} ${style.hero_movil_2} ${style.hero_one}`}>
                      Boda
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;Yelitza&nbsp;
                      <span className={style.capsule}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>&nbsp;Jesús
                    </h1>
                    <h1 className={`${style.hero_title} ${style.hero_movil} ${style.hero_one}`}>
                      Titulo
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;Titulo&nbsp;
                      <span className={style.capsule}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                      &nbsp;
                      Text
                    </h1>
                    <p className={style.hero_sub_content}>
                      El pasado 18 de febrero del 2023 se llevo a cabo la Celebración Eclesiática
                      entre Yelitza Angélica Becerra y Jesús Carballo en la Iglesia &quot;La Ascensión del Señor&quot;
                      ubicada en la Urbanización Cumbres de Curumo en la ciudad de Caracas.
                    </p>
                    <Link
                      href="/"
                      className={`${style.book_now_link} ${style.w_inline_block}`}
                    >
                      <p className={style.subtitle}>Ver Portafolio</p>
                      <Image
                        src={arrow}
                        loading="lazy"
                        alt="Arrow"
                        className={style.arrow_image}
                      />
                    </Link>
                    <Image
                      priority={true}
                      src={home_2}
                      loading="eager"
                      alt="Hero Left Image"
                      className={style.hero_circle_image}
                    />
                  </div>

                  <div className={style.top_right}>
                    <Image
                      priority={true}
                      src={home_3}
                      loading="eager"
                      // sizes="(max-width: 767px) 180px, (max-width: 991px) 250px, 380px"
                      width={1899}
                      height={1923}
                      alt="Hero Img"
                      className={style.top_circle_image} />
                  </div>
                </div>
                <div
                  id={style["w-node-_020a1539-09fc-2765-16e8-bf036c940ac5-fbe143f2"]}
                  className={style.hero_bottom}
                >
                  <div className={style.bottom_left}>
                    <div className={style.flex}>
                      <h4 className={style.last_heading}>Decidida</h4>
                      <p className={`${style.body_small} ${style.last_paragraph}`}>Serena</p>
                    </div>
                    <div className={style.flex}>
                      <h4 className={style.last_heading}>Hermosa</h4>
                      <p className={`${style.body_small} ${style.last_paragraph}`}>
                        Pícara
                      </p>
                    </div>
                  </div>
                  <div className={style.bottom_right}>
                    {/* <Image
                      src={home_1}
                      loading="eager"
                      alt="Explore Image"
                      className={style.hero_image}
                    /> */}
                    <Gallery>
                      <Item
                        original="/images/Home/home1_853x569.jpg"
                        thumbnail="/images/Home/home1_853x569.jpg"
                        width="853"
                        height="569"
                      >
                        {({ ref, open }) => (
                          <Image
                            priority={true}
                            ref={ref}
                            onClick={open}
                            src={home_1}
                            loading="eager"
                            alt="Explore Image"
                            className={style.hero_image} />
                        )}
                      </Item>
                    </Gallery>
                    <div>
                      <h4 className={style.last_heading}>Familia</h4>
                      <p className={style.last_paragraph}>
                        El comienzo de una nueva etapa...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* S2 */}
          <div className={style.feature_section}>
            <div className={`${style.container} ${style.w_container}`}>
              <div className={style.featured_inner}>
                <p className={style.subtitle}>VER EL MUNDO CON TUS PROPIOS OJOS</p>
                <h2 className={style.last_heading}>Viaje, Exploración &amp; Aventura</h2>
                <p className={style.subtitle_content}>Text de Prueba Text de Prueba Text de Prueba Text de Prueba </p>

              </div>
            </div>
          </div>

          {/* S3 */}
          <div id="category" className={style.about_section}>
            <div className={`${style.main_content} ${style.about_section_content}`}>
              <div className={style.invitation_holder}>
                <div id={style["category-1"]} className={style.invitation_box}>
                  <a href='#' className={`${style.link_overflow} ${style.link_category}`} >
                    <Image
                      src={category_1}
                      loading="lazy"
                      // sizes="(max-width: 479px) 81vw, (max-width: 767px) 80vw, 26vw"
                      alt=""
                      className={style.image_category}
                    />
                  </a>
                  <div className={style.block_category}>
                    <div className={style.info}>
                      <div className={style.horizontal_brown_line} />
                      <h4 className={style.no_margin}>Ceremonia</h4>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ut quidem fugit architecto illo hic neque cum, suscipit
                      nemo doloremque laborum rem numquam exercitationem delectus dolores aliquid laboriosam placeat iusto.
                    </p>
                    <Link
                      href="/"
                      className={`${style.book_now_link} ${style.w_inline_block}`}
                    >
                      <p className={style.subtitle}>Ver Ceremonia</p>
                      <Image
                        src={arrow}
                        loading="lazy"
                        alt="Arrow"
                        className={style.arrow_image}
                      />
                    </Link>
                  </div>

                </div>
                <div id={style["category-2"]} className={style.invitation_box}>
                  <a href='#' className={`${style.link_overflow} ${style.link_category}`} >
                    <Image
                      src={category_2}
                      loading="lazy"
                      // sizes="(max-width: 479px) 81vw, (max-width: 767px) 80vw, 26vw"
                      alt=""
                      className={style.image_category}
                    />
                  </a>
                  <div className={style.block_category}>
                    <div className={style.info}>
                      <div className={style.horizontal_brown_line} />
                      <h4 className={style.no_margin}>Celebración</h4>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ut quidem fugit architecto illo hic neque cum, suscipit
                      nemo doloremque laborum rem numquam exercitationem delectus dolores aliquid laboriosam placeat iusto.
                    </p>
                    <Link
                      href="/"
                      className={`${style.book_now_link} ${style.w_inline_block}`}
                    >
                      <p className={style.subtitle}>Ver Celebración</p>
                      <Image
                        src={arrow}
                        loading="lazy"
                        alt="Arrow"
                        className={style.arrow_image}
                      />
                    </Link>
                  </div>

                </div>
                <div id={style["category-3"]} className={style.invitation_box}>
                  <a href='#' className={`${style.link_overflow} ${style.link_category}`} >
                    <Image
                      src={category_3}
                      loading="lazy"
                      // sizes="(max-width: 479px) 81vw, (max-width: 767px) 80vw, 26vw"
                      alt=""
                      className={style.image_category}
                    />
                  </a>
                  <div className={style.block_category}>
                    <div className={style.info}>
                      <div className={style.horizontal_brown_line} />
                      <h4 className={style.no_margin}>Sesión de Fotos</h4>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ut quidem fugit architecto illo hic neque cum, suscipit
                      nemo doloremque laborum rem numquam exercitationem delectus dolores aliquid laboriosam placeat iusto.
                    </p>
                    <Link
                      href="/"
                      className={`${style.book_now_link} ${style.w_inline_block}`}
                    >
                      <p className={style.subtitle}>Ver Sesión de Fotos</p>
                      <Image
                        src={arrow}
                        loading="lazy"
                        alt="Arrow"
                        className={style.arrow_image}
                      />
                    </Link>
                  </div>


                </div>
              </div>
            </div>
          </div>

          {/* Video */}


          <div id="Icon-Image-Text" className={style.section}>
            <div className={`${style.container} ${style.w_container}`}>
              <div id="Image-center-Icon-side-Text" className={style.practice_area_wrapper}>
                <div
                  className={style.row}
                >
                  <div className={`${style.wrapper_practice_area_content} ${style.margin_left}`}>
                    <div className={`${style.info} ${style.w_clearfix}`}>
                      <div className={`${style.content_icon_wrapper}`}>
                      </div>
                      <div className={style.description}>
                        <h4 className={`${style.features_two_info_title}`}>Titulo</h4>
                        <p>
                          Texto texto texto texo texo texo texto
                          texto texto texto
                        </p>
                      </div>
                    </div>
                    <div className={`${style.info} ${style.w_clearfix}`}>
                      <div className={`${style.content_icon_wrapper}`}>
                      </div>
                      <div className={style.description}>
                        <h4 className={`${style.features_two_info_title}`}>Titulo</h4>
                        <p>
                          Texto texto texto texo texo texo texto
                          texto texto texto
                        </p>
                      </div>
                    </div>

                  </div>
                  <div className={style.wrapper_practice_area_content}>
                    <div className={style.image_wrapper_center}>
                      <div className={style.video_contain}>
                        <div
                          className={`${style.video_home} ${style.w_background_video} ${style.w_background_video_atom}`}
                          style={{ width: "100%", height: "100%" }}
                        >
                          <video
                            id="32d20bf2-808b-659a-4433-133edaba0c6d-video"
                            autoPlay
                            loop
                            muted
                            playsInline
                          >
                            <source
                              src="../images/Home/Video/video_collage.mp4" type="video/mp4"
                            />
                            <source
                              src="../images/Home/Video/video_collage.mp4" type="video/mp4"
                            />
                          </video>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`${style.wrapper_practice_area_content} ${style.margin_right}`}>
                    <div className={`${style.info} ${style.w_clearfix}`}>
                      <div className={`${style.content_icon_wrapper}`}>
                      </div>
                      <div className={style.description}>
                        <h4 className={`${style.features_two_info_title}`}>Titulo</h4>
                        <p>
                          Texto texto texto texo texo texo texto
                          texto texto texto
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>




          {/* Ella */}
          <div id={style['history-1']} className={style.blue_section}>
            <div className={style.container}>
              <h2 className={style.centered}>
                Ella
              </h2>
              <div className={`${style.decorative_line_flipped_div} ${style.blue}`}>
                <Image
                  src={Diamond_Blue}
                  loading="lazy"
                  alt=""
                />
                <div className={`${style.decorative_line} ${style.blue}`} />
              </div>
              <div className={`${style.all_caps} ${style.centered}`}>Yelitza - Jesús</div>
            </div>
            <div className={`${style.container} ${style.with_columns}`}>
              <div className={`${style._2_columns} ${style.image_on_right} ${style.w_row}`}>
                <div className={`${style.column} ${style.centered} ${style.w_col} ${style.w_col_5}`}>
                  <div className={style.centered_column_content}>
                    <h3 className={style.left_aligned}>Historia de Ella</h3>
                    <p className={style.left_aligned}>
                      Enjoy a finely curated meal and upscale atmosphere in our bar and
                      restaurant. Our philosophy for food and drinks matches our
                      hospitality philosophy for our suites. We strive for perfection. Our
                      ingredients are locally sourced and inspired. Our drinks are the
                      creative magic of our skilled mixologists.
                    </p>
                    <Link
                      href="/About"
                      className={`${style.book_now_link} ${style.w_inline_block}`}
                    >
                      <p className={style.subtitle}>Saber Más</p>
                      <Image
                        src={arrow}
                        loading="lazy"
                        alt="Arrow"
                        className={style.arrow_image}
                      />
                    </Link>
                  </div>
                </div>
                <div className={`${style.overlapping_images_column} ${style.w_col} ${style.w_col_7}`}>
                  <div className={`${style.overlapping_column_image} ${style.overlapping_front}`} />
                  <div className={`${style.overlapping_back_image_div} ${style.overlapping_bottom_image_right}`}>
                    <div className={style.overlapping_column_image} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div id={style['history-1']} className={`${style.padding_vertical} ${style.padding_huge}`}>
            <div className={style.container}>
              <h2 className={style.centered}>
                Gallery
              </h2>
              <div className={`${style.decorative_line_flipped_div} ${style.blue}`}>
                <Image
                  src={Diamond_Blue}
                  loading="lazy"
                  alt=""
                />
                <div className={`${style.decorative_line} ${style.blue}`} />
              </div>
              <div className={`${style.all_caps} ${style.centered}`}>Yelitza - Jesús</div>
            </div>
            <div className={style.row_image_wrapper}>
              <div className={style.header_row}>
                <div className={style.row_wrapper_reverse}>
                  <div className={`effect_3 ${style.w_layout_grid} ${style.row_component}`}>
                    <div
                      id={style["w-node-_3b1f5c82-e522-f04c-2bcb-bb12bb8eb423-a518d5e4"]}
                      className={style.row_image_overflow}
                    >
                      <Image
                        src={pt_1}
                        loading="lazy"
                        alt="GaleryAn"
                        className={style.cover_image}
                      />
                    </div>
                    <div
                      id={style["w-node-_3b1f5c82-e522-f04c-2bcb-bb12bb8eb423-a518d5e4"]}
                      className={style.row_image_overflow}
                    >
                      <Image
                        src={pt_2}
                        loading="lazy"
                        alt="GaleryAn"
                        className={style.cover_image}
                      />
                    </div>
                    <div
                      id={style["w-node-_3b1f5c82-e522-f04c-2bcb-bb12bb8eb423-a518d5e4"]}
                      className={style.row_image_overflow}
                    >
                      <Image
                        src={pt_3}
                        loading="lazy"
                        alt="GaleryAn"
                        className={style.cover_image}
                      />
                    </div>
                    <div
                      id={style["w-node-_3b1f5c82-e522-f04c-2bcb-bb12bb8eb423-a518d5e4"]}
                      className={style.row_image_overflow}
                    >
                      <Image
                        src={pt_4}
                        loading="lazy"
                        alt="GaleryAn"
                        className={style.cover_image}
                      />
                    </div>
                    <div
                      id={style["w-node-_3b1f5c82-e522-f04c-2bcb-bb12bb8eb423-a518d5e4"]}
                      className={style.row_image_overflow}
                    >
                      <Image
                        src={pt_5}
                        loading="lazy"
                        alt="GaleryAn"
                        className={style.cover_image}
                      />
                    </div>
                  </div>
                </div>
                <div className={style.row_wrapper_reverse}>
                  <div className={`effect_4 ${style.w_layout_grid} ${style.row_component}`}>
                    <div
                      id={style["w-node-_3b1f5c82-e522-f04c-2bcb-bb12bb8eb423-a518d5e4"]}
                      className={style.row_image_overflow}
                    >
                      <Image
                        src={pt_6}
                        loading="lazy"
                        alt="GaleryAn"
                        className={style.cover_image}
                      />
                    </div>
                    <div
                      id={style["w-node-_3b1f5c82-e522-f04c-2bcb-bb12bb8eb423-a518d5e4"]}
                      className={style.row_image_overflow}
                    >
                      <Image
                        src={pt_7}
                        loading="lazy"
                        alt="GaleryAn"
                        className={style.cover_image}
                      />
                    </div>
                    <div
                      id={style["w-node-_3b1f5c82-e522-f04c-2bcb-bb12bb8eb423-a518d5e4"]}
                      className={style.row_image_overflow}
                    >
                      <Image
                        src={pt_8}
                        loading="lazy"
                        alt="GaleryAn"
                        className={style.cover_image}
                      />
                    </div>
                    <div
                      id={style["w-node-_3b1f5c82-e522-f04c-2bcb-bb12bb8eb423-a518d5e4"]}
                      className={style.row_image_overflow}
                    >
                      <Image
                        src={pt_9}
                        loading="lazy"
                        alt="GaleryAn"
                        className={style.cover_image}
                      />
                    </div>
                    <div
                      id={style["w-node-_3b1f5c82-e522-f04c-2bcb-bb12bb8eb423-a518d5e4"]}
                      className={style.row_image_overflow}
                    >
                      <Image
                        src={pt_10}
                        loading="lazy"
                        alt="GaleryAn"
                        className={style.cover_image}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.header_row}>
                <div className={style.row_wrapper}>
                  <div className={`effect_1 ${style.w_layout_grid} ${style.row_component}`}>
                    {/* <div>
                      
                    </div> */}
                    <div
                      id={style["w-node-_3b1f5c82-e522-f04c-2bcb-bb12bb8eb423-a518d5e4"]}
                      className={style.row_image_overflow}
                    >
                      <Image
                        src={pt_11}
                        loading="lazy"
                        alt="GaleryAn"
                        className={style.cover_image}
                      />
                    </div>
                    <div
                      id={style["w-node-_3b1f5c82-e522-f04c-2bcb-bb12bb8eb423-a518d5e4"]}
                      className={style.row_image_overflow}
                    >
                      <Image
                        src={pt_12}
                        loading="lazy"
                        alt="GaleryAn"
                        className={style.cover_image}
                      />
                    </div>
                    <div
                      id={style["w-node-_3b1f5c82-e522-f04c-2bcb-bb12bb8eb423-a518d5e4"]}
                      className={style.row_image_overflow}
                    >
                      <Image
                        src={pt_13}
                        loading="lazy"
                        alt="GaleryAn"
                        className={style.cover_image}
                      />
                    </div>
                    <div
                      id={style["w-node-_3b1f5c82-e522-f04c-2bcb-bb12bb8eb423-a518d5e4"]}
                      className={style.row_image_overflow}
                    >
                      <Image
                        src={pt_14}
                        loading="lazy"
                        alt="GaleryAn"
                        className={style.cover_image}
                      />
                    </div>
                    <div
                      id={style["w-node-_3b1f5c82-e522-f04c-2bcb-bb12bb8eb423-a518d5e4"]}
                      className={style.row_image_overflow}
                    >
                      <Image
                        src={pt_15}
                        loading="lazy"
                        alt="GaleryAn"
                        className={style.cover_image}
                      />
                    </div>
                  </div>
                </div>
                <div className={style.row_wrapper}>
                  <div className={`effect_2 ${style.w_layout_grid} ${style.row_component}`}>
                    <div
                      id={style["w-node-_3b1f5c82-e522-f04c-2bcb-bb12bb8eb423-a518d5e4"]}
                      className={style.row_image_overflow}
                    >
                      <Image
                        src={pt_16}
                        loading="lazy"
                        alt="GaleryAn"
                        className={style.cover_image}
                      />
                    </div>
                    <div
                      id={style["w-node-_3b1f5c82-e522-f04c-2bcb-bb12bb8eb423-a518d5e4"]}
                      className={style.row_image_overflow}
                    >
                      <Image
                        src={pt_17}
                        loading="lazy"
                        alt="GaleryAn"
                        className={style.cover_image}
                      />
                    </div>
                    <div
                      id={style["w-node-_3b1f5c82-e522-f04c-2bcb-bb12bb8eb423-a518d5e4"]}
                      className={style.row_image_overflow}
                    >
                      <Image
                        src={pt_18}
                        loading="lazy"
                        alt="GaleryAn"
                        className={style.cover_image}
                      />
                    </div>
                    <div
                      id={style["w-node-_3b1f5c82-e522-f04c-2bcb-bb12bb8eb423-a518d5e4"]}
                      className={style.row_image_overflow}
                    >
                      <Image
                        src={pt_19}
                        loading="lazy"
                        alt="GaleryAn"
                        className={style.cover_image}
                      />
                    </div>
                    <div
                      id={style["w-node-_3b1f5c82-e522-f04c-2bcb-bb12bb8eb423-a518d5e4"]}
                      className={style.row_image_overflow}
                    >
                      <Image
                        src={pt_20}
                        loading="lazy"
                        alt="GaleryAn"
                        className={style.cover_image}
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* El */}
          <div id={style['history-2']} className={style.blue_section}>
            <div className={style.container}>
              <h2 className={style.centered}>
                Él
              </h2>
              <div className={`${style.decorative_line_flipped_div} ${style.blue}`}>
                <Image
                  src={Diamond_Blue}
                  loading="lazy"
                  alt=""
                />
                <div className={`${style.decorative_line} ${style.blue}`} />
              </div>
              <div className={`${style.all_caps} ${style.centered}`}>Yelitza - Jesús</div>
            </div>
            <div className={`${style.container} ${style.with_columns}`}>
              <div className={`${style._2_columns} ${style.w_row}`}>
                <div className={`${style.overlapping_images_column} ${style.left} ${style.w_col} ${style.w_col_7}`}>
                  <div className={`${style.overlapping_column_image} ${style.overlapping_front_weddings}`} />
                  <div className={`${style.overlapping_back_image_div} ${style.overlapping_bottom_image_left}`}>
                    <div className={`${style.overlapping_column_image} ${style.weddings}`} />
                  </div>
                </div>
                <div className={`${style.column} ${style.centered} ${style.w_col} ${style.w_col_5}`}>
                  <div className={style.centered_column_content}>
                    <h3 className={style.left_aligned}>
                      Historia Sobre Él
                    </h3>
                    <p className={style.left_aligned}>
                      Text de Prueba Text de Prueba Text de Prueba
                      Text de Prueba Text de Prueba Text de Prueba Text de Prueba
                      Text de Prueba Text de Prueba Text de Prueba Text de Prueba
                      Text de Prueba Text de Prueba Text de Prueba
                    </p>
                    <Link
                      href="/About"
                      className={`${style.book_now_link} ${style.w_inline_block}`}
                    >
                      <p className={style.subtitle}>Saber Más</p>
                      <Image
                        src={arrow}
                        loading="lazy"
                        alt="Arrow"
                        className={style.arrow_image}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div id={style['history-1']} className={style.testimonials}>
            <div className={`${style.main_content} ${style.testimonials_content}`}>
              <div className={style.container}>
                <h2 className={style.centered}>
                  Que dicen
                  <br />
                  sobre ellos
                </h2>
                <div className={`${style.decorative_line_flipped_div} ${style.blue}`}>
                  <Image
                    src={Diamond_Blue}
                    loading="lazy"
                    alt=""
                  />
                  <div className={`${style.decorative_line} ${style.blue}`} />
                </div>
                <div className={`${style.all_caps} ${style.centered}`}>Yelitza - Jesús</div>
              </div>
              <div className={`${style.testimonials_slider} ${style.w_slider}`}>
                <div
                  className={`${style.testimonials_slider_mask} ${style.w_slider_mask}`}
                  id="w-slider-mask-0"
                >
                  <div className={`${style.slide} ${style.w_slide}`}>
                    <div className={style.qq}>
                      <Image
                        src={donts}
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <p className={style.quote}>
                      <em>
                        Texto de Prueba
                      </em>
                    </p>
                    <p className={style.normal_margin}>
                      Texto de Prueba texto de Prueba texto de Prueba texto de Prueba texto de Prueba
                      texto de Prueba texto de Prueba texto de Prueba texto de Prueba texto de Prueba
                    </p>
                    <div className={style.author_wrapper}>
                      <p className={style.author_name}>
                        Nombre
                      </p>
                      <p>Familiar</p>
                    </div>
                  </div>
                </div>
                <div className={`${style.left_arow} ${style.w_slider_arrow_left}`}>
                  <Image
                    src={left_arrow}
                    loading="lazy"
                    alt=""
                    className={style.left_arrow_icon}
                  />
                </div>
                <div className={`${style.right_arrow} ${style.w_slider_arrow_right}`}>
                  <Image
                    src={right_arrow}
                    loading="lazy"
                    alt=""
                    className={style.right_arrow_icon}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Portafolio
https://fortitude-template.webflow.io/resorts */}

          {/* About 
https://travigo.webflow.io/blog/hispanic-heritage-in-these-culturally-rich-locales-in-greece */}

        </div>

        <Footer />

      </div>
    </>
  )
}
