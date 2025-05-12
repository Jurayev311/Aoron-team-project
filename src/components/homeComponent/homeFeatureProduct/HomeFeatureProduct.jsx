import React from 'react'
import product from '../../../assets/home-product/image.png'

const HomeFeatureProduct = () => {
  return (
    <>
        <div className='home__feature__product pt-[100px]'>
            <div className="kontainer">
                <h1 className="home_product_title text-center text-[40px] font-[300] ">Featured Products</h1>
                <p className='home_product_description text-center text-[18px] max-w-[800px] mx-auto mt-[20px] text-[#777] '>Discover our carefully selected collection of premium menswear, crafted with the finest materials and attention to detail.</p>

                <div className="home_products">
                    <div className="home_products_item">
                        <div className="home_product_img">
                            {/* <img src={product} alt="" /> */}
                        </div>
                        <div className="home_product_item_title">
                            <h4>Мужской костюм ID1020</h4>
                            <h4>$43</h4>
                        </div>
                        <p className='home_product_item_description'>Предлагаем мужской костюм. Этот стильный и элегантный костюм идеально подходит для бизнес- и корпоративных закупок, а также для магазинов и бутиков. Костюм сочетает в себе утонченную классику и современную моду, обеспечивая комфорт и стиль для мужчин, ценящих высокое качество. Основные характеристики: Цвет: Темно-синий Крой: Классический, с двойным рядом пуговиц Размеры: 44, 46, 48, 50, 52</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HomeFeatureProduct