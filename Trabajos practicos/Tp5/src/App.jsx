import { useState, useEffect } from 'react'
import { ProductCard, Asset } from './components'

import clock from './assets/icons/clock.svg'
import eye from './assets/icons/eye.svg'
import dollarSign from './assets/icons/dollar-sign.svg'
import checkCircle from './assets/icons/check-circle.svg'
import logo from './assets/imgs/logo.svg'

const COINAPI_API_KEY = import.meta.env.VITE_COINAPI_API_KEY

export function App() {
    const [assets, setAssets] = useState([])
    let updatedAt = new Date()

    useEffect(() => {
        async function getAssets() {
            const assets = await fetch('https://rest.coinapi.io/v1/assets?filter_asset_id=BTC,ETH,BCH,BNB', {
                headers: { 'X-CoinApi-Key': COINAPI_API_KEY }
            }).then(response => response.json())

            setAssets(assets)
            updatedAt = new Date()
        }

        getAssets()
    }, [])

    return (
        <>
           <header className="relative grid flex-col justify-center w-full min-w-[320px] h-[334px] text-center bg-gradient-to-br from-[#282623] to-[#F7931A]">
                <img src={logo} alt="Logo de Batabit" className="w-[151px] h-[24px] mt-[60px] self-center" />
                <div className="w-[90%] min-w-[288px] max-w-[900px] h-[218px] mt-[50px] text-center self-center">
                    <h1 className="text-[2.4rem] font-bold leading-[2.6rem] text-white">La próxima revolución en el intercambio de criptomonedas</h1>
                    <p className="mt-[25px] text-[1.4rem] font-medium leading-[1.8rem] text-[#ffe9d4]">Batabit te ayuda a navegar entre los diferentes precios y tendencias.</p>
                    <a href="/" className="absolute left-1/2 transform -translate-x-1/2 top-[270px] block mt-[35px] px-6 py-4 bg-[#faf8f7] shadow-lg rounded-md text-[1rem] font-bold text-[#282623] text-center">Conoce Nuestros Planes <span className="inline-block w-[13px] h-[8px] ml-[10px] bg-[url('./assets/icons/down-arrow.svg')] bg-cover bg-center bg-no-repeat"></span></a>
                </div>
            </header>

            <main>
                <section className="w-full pt-[80px] pb-[30px] text-center">
                    <div className="w-[200px] h-[200px] mx-auto mb-[50px] bg-[url('./assets/imgs/Bitcoin.svg')] bg-cover bg-center bg-no-repeat"></div>
                    <div className="w-[90%] min-w-[288px] max-w-[900px] mx-auto">
                        <h2 className="mb-[30px] text-[2.4rem] font-bold leading-[2.6rem] text-[#282623]">Visibilizamos todas las tasas de cambio.</h2>
                        <p className="mb-[30px] text-[1.4rem] font-medium leading-[1.6rem] text-[#757575]">Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo.</p>
                    </div>
                </section>
                <section className="w-[90%] min-w-[230px] max-w-[300px] mx-auto bg-[#faf8f7]">
                    <div className="w-[70%] min-w-[235px] max-w-[500px] mx-auto font-sans">
                        <p className="mb-[15px] text-[1.8rem] font-bold leading-[2.5rem] text-[#F7931A]">Monedas:</p>
                        <div className="currency-table--container">
                            <table>
                                {assets.length > 0
                                    ? assets.map(({ asset_id, price_usd, name }) => <Asset key={asset_id} name={name} price={price_usd} />)
                                    : null}
                            </table>
                        </div>
                        <div className="h-auto mx-auto mt-[15px] mb-[20px] p-3 rounded-[8px] bg-[#ffe9d4]">
                            <p className="text-sm leading-5 text-[#201e1c]">
                                <b>Actualizado: </b>
                                {new Date(updatedAt).toLocaleString()}
                            </p>
                        </div>
                    </div>
                </section>
                <section className="relative w-full min-w-[320px] p-[20px] bg-[#201e1c]">
                    <span className="absolute w-[40px] h-[25px] top-[-10px] left-[calc(50%-30px)] bg-[url('./assets/icons/batata.svg')]"></span>
                    <div className="w-[90%] min-w-[300px] mx-auto mt-[50px] text-center text-white">
                        <h2 className="text-white text-[1.4rem] font-medium leading-[1.8rem]">Creamos un producto sin comparación.</h2>
                        <p className="text-[#808080] mb-[20px] py-3">Confiable y diseñado para su uso diario.</p>
                    </div>

                    <section className="flex flex-col justify-center gap-4">
                        <ProductCard
                            iconUrl={clock}
                            iconAlt='clock'
                            title='Tiempo real'
                            body='Nuestra API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.'
                        />
                        <ProductCard
                            iconUrl={eye}
                            iconAlt='eye'
                            title='No hay tasas escondidas'
                            body='Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.'
                        />
                        <ProductCard
                            iconUrl={dollarSign}
                            iconAlt='dollar'
                            title='Compare monedas'
                            body='No más rumores, con Babtabit sabrás el valor real de cada moneda en el mercado actual.'
                        />
                        <ProductCard
                            iconUrl={checkCircle}
                            iconAlt='check'
                            title='Información confiable'
                            body='Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan.'
                        />
                    </section>
                </section>

                <section className="w-full min-w-[320px] h-[50vh] bg-[url('./assets/imgs/bitcoinbaby2x.jpg')] bg-cover bg-center bg-no-repeat">
                    <h2 className="pt-[50px] text-[2.4rem] font-bold leading-[2.6rem] text-center text-white">Conócelo hoy</h2>
                </section>

                <section></section>
                <footer></footer>
            </main>
        </>
    )
}
