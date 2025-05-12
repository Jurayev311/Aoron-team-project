import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Spin } from 'antd'
import Products from '../../components/products/Products'

const ProductDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [error, setError] = useState(null)
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://testaoron.limsa.uz/api/product/${id}`)
                if (!res.ok) throw new Error(`Status: ${res.status}`)
                const data = await res.json()
                setProduct(data.data)
            } catch (err) {
                setError(err.message)
            }
        }
        fetchData()
    }, [id])

    if (error) return <div className="text-red-500 pt-[100px]">Xatolik: {error}</div>

    if (!product) {
        return (
            <div className="flex items-center justify-center h-screen text-black">
                <Spin size="large" tip="Yuklanmoqda..." />
            </div>
        )
    }

    return (
        <>
            <section className='kontainer'>
                <div className=" pt-[100px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <img
                            src={`https://testaoron.limsa.uz/${product?.images[0]}`}
                            alt={product.title_en}
                            className="w-full h-[690px] object-cover rounded-lg"
                        />
                        <div className="flex gap-2 mt-4">
                            {product.images.map((img, i) => (
                                <img
                                    key={i}
                                    src={`https://testaoron.limsa.uz/${img}`}
                                    className="w-16 h-16 object-cover border rounded cursor-pointer"
                                    alt="Thumbnail"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="space-y-5">
                        <h2 className="text-3xl font-semibold">{product.title_ru}</h2>
                        <p className="text-2xl font-bold text-green-600">${product.price}</p>
                        <p className="text-gray-700">{product.description_ru}</p>

                        {product.materials?.length > 0 && (
                            <p className="text-sm text-gray-600">
                                <span className="font-medium">Материал:</span>{" "}
                                {product.materials[0].name} {product.materials[0].value}%
                            </p>
                        )}

                        <div>
                            <label className="font-medium">Размер:</label>
                            <select className="ml-2 border border-gray-400 rounded px-2 py-1">
                                {product.sizes.map((size) => (
                                    <option key={size.id} value={size.size}>
                                        {size.size}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="font-medium">Цвет:</span>
                            {product.colors.map((color) => (
                                <div
                                    key={color.id}
                                    className="w-6 h-6 rounded-full border-none"
                                    style={{ backgroundColor: color.color_en }}
                                    title={color.color_ru}
                                />
                            ))}
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="font-medium">Количество:</span>
                            <div className="flex items-center border border-gray-300 rounded">
                                <button
                                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                                    className="px-3 py-1"
                                >−</button>
                                <span className="px-4">{quantity}</span>
                                <button
                                    onClick={() => setQuantity((q) => q + 1)}
                                    className="px-3 py-1"
                                >+</button>
                            </div>
                        </div>

                        <button className="w-full bg-black text-white py-3 rounded-lg text-lg hover:bg-[#1a1a1a] transition cursor-pointer">
                            Add to Cart
                        </button>

                        <div className="border-t pt-6 mt-6">
                            <h3 className="text-lg font-semibold mb-2">Product Details</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                <li>
                                    This contains suits {product.materials[0]?.name || ''}{' '}
                                    {product.materials[0]?.value || ''}%, ensuring comfort and durability.
                                </li>
                                <li>Regular fit for everyday comfort</li>
                                <li>High-quality stitching for durability</li>
                                <li>Color: {product.colors[0]?.color_en}</li>
                                <li>Sizes: {product.sizes.map((s) => s.size).join(', ')}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='mt-[100px]'>
                    <h2 className='text-3xl font-light mb-[10px]'>You may also like</h2>
                        <Products />
                </div>
            </section>
        </>
    )
}

export default ProductDetail
