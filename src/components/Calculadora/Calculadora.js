import './Calculadora.css';
import { CheckIcon } from '@heroicons/react/20/solid';

const tiers = [
  {
    name: 'Paquete Básico',
    id: 'tier-basic',
    href: `https://wa.me/5218112557887?text=Buen%20día%20Arbatech!,%20estoy%20interesado%20en%20el%20paquete%20Paquete%20Básico,%20me%20gustaría%20recibir%20más%20información,%20gracias!`,
    priceMonthly: '$3,000 MXN',
    features: [
      '<span style="color: var(--secondary-color-purple);">1000 conversaciones</span>',
      '<span style="color: var(--secondary-color-purple);">1 integración API</span>',
      'Primer mes gratis',
      'Te llevamos de la mano',
      'Hasta 7 embudos',
      'Conversaciones adicionales: $4 MXN / $0.20 USD',
      'Soporte de lunes a domingo, 9 AM - 6 PM',
      'Cancelación en cualquier momento',
    ],
    zIndex: 10,
    size: 'lg:scale-90 lg:-translate-x-10 lg:translate-y-10',
    border: 'border-1',
  },
  {
    name: 'Pro Plus',
    id: 'tier-pro-plus',
    href: `https://wa.me/5218112557887?text=Buen%20día%20Arbatech!,%20estoy%20interesado%20en%20el%20paquete%20Pro%20Plus,%20me%20gustaría%20recibir%20más%20información,%20gracias!`,
    priceMonthly: '$5,000 MXN',
    features: [
      '<span style="color: var(--secondary-color-purple);">2000 conversaciones</span>',
      '<span style="color: var(--secondary-color-purple);">3 integraciones API</span>',
      'Primer mes gratis',
      'Te llevamos de la mano',
      'Hasta 7 embudos',
      'Conversaciones adicionales: $4 MXN / $0.20 USD',
      'Soporte de lunes a domingo, 9 AM - 6 PM',
      'Cancelación en cualquier momento',
    ],
    zIndex: 15,
    size: 'lg:scale-95 lg:-translate-x-10 lg:translate-y-5',
    background: 'bg-[rgba(185,185,185,0.32)]',
    border: 'border-2 border-[#646464]',
  },
  {
    name: 'Elite Max',
    id: 'tier-elite-max',
    href: `https://wa.me/5218112557887?text=Buen%20día%20Arbatech!,%20estoy%20interesado%20en%20el%20paquete%20Elite%20Max,%20me%20gustaría%20recibir%20más%20información,%20gracias!`,
    priceMonthly: '$10,000 MXN',
    features: [
      '<span style="color: var(--secondary-color-purple);">5000 conversaciones</span>',
      '<span style="color: var(--secondary-color-purple);">5 integraciones API</span>',
      'Primer mes gratis',
      'Te llevamos de la mano',
      'Hasta 7 embudos',
      'Conversaciones adicionales: $4 MXN / $0.20 USD',
      'Soporte de lunes a domingo, 9 AM - 6 PM',
      'Cancelación en cualquier momento',
    ],
    zIndex: 30,
    featured: true,
    size: 'lg:scale-110 lg:translate-x-0 lg:translate-y-0',
    background: 'bg-[rgba(3,218,198,0.23)]',
    border: 'border-2 border-[rgba(3,218,198,1)]',
  },
  {
    name: 'Arbatech Quantum',
    id: 'tier-arbatech',
    href: `https://wa.me/5218112557887?text=Buen%20día%20Arbatech!,%20estoy%20interesado%20en%20el%20paquete%20Arbatech%20Quantum,%20me%20gustaría%20recibir%20más%20información,%20gracias!`,
    priceMonthly: 'Costo customizable',
    features: [
      '<span style="color: var(--secondary-color-purple);">Conversaciones ilimitadas</span>',
      '<span style="color: var(--secondary-color-purple);">Integraciones API ilimitadas</span>',
      'Primer mes gratis',
      'Te llevamos de la mano',
      'Hasta 7 embudos',
      'Conversaciones adicionales: $4 MXN / $0.20 USD',
      'Soporte de lunes a domingo, 9 AM - 6 PM',
      'Cancelación en cualquier momento',
    ],
    zIndex: 20,
    size: 'lg:scale-100 lg:translate-x-10 lg:-translate-y-5',
    background: 'bg-[rgba(187,134,252,0.23)]',
    border: 'border-2 border-[rgba(187,134,252,1)]',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Pricing() {
  return (
    <div id='calculadora' className="relative isolate bg-[#0F1118] px-6 py-24 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-lg font-semibold text-indigo-600">Precios</h2>
        <p className="mt-2 text-5xl font-extralight tracking-tight text-white sm:text-6xl">
          Elige el plan perfecto para tu negocio
        </p>
      </div>

      {/* Fondo agregado */}
      <div className="background-desktop-pricing">
        <div className="overlay-wrap-pricing">
          <div className="overlay-top-pricing"></div>
          <div className="overlay-bottom-pricing"></div>
          <div className="overlay-right-pricing"></div>
        </div>
      </div>

      <div className="relative mx-auto mt-20 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:max-w-7xl lg:grid-cols-4 lg:gap-x-6">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={classNames(
              'relative rounded-3xl p-8 ring-1 sm:p-10 transform transition-all duration-300',
              tier.background,
              tier.size,
              'sm:scale-100 sm:translate-x-0 sm:translate-y-0',
              tier.border,
              `z-${tier.zIndex}`
            )}
          >
            {tier.featured && (
              <div className="absolute top-3 right-3 bg-indigo-500 text-white px-4 py-1 text-sm font-semibold rounded-full">
                Más Popular
              </div>
            )}
            <h3 id={tier.id} className="text-2xl font-semibold text-[rgba(3,218,198,1)] tracking-tight">
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-2xl font-semibold tracking-tight text-white">
                {tier.priceMonthly}
              </span>
              {tier.name !== 'Arbatech Quantum' && (
                <span className="text-sm text-gray-400">/mes</span>
              )}
            </p>
            <ul className="mt-8 space-y-4 text-sm text-gray-400">
  {tier.features.map((feature, index) => (
    <li key={index} className="flex items-center gap-x-3">
      <CheckIcon
        className={`h-6 w-6 flex-shrink-0 fill-current ${index < 2 ? 'fill-custom-purple' : ''}`}
        aria-hidden="true"
      />
      <span
        className="leading-tight"
        dangerouslySetInnerHTML={{ __html: feature }}
      />
    </li>
  ))}
</ul>


            <a 
              target="_blank"
              rel="noopener noreferrer"
              href={tier.href}
              className="mt-8 flex justify-center items-center gap-x-2 rounded-full border border-[#03DAC6] bg-[#03DAC6] px-4 py-3 text-center text-xs font-light text-black hover:bg-opacity-80"
            >
              Obtener este paquete
              <img
                src="../img/line-arrow-right.svg"
                alt="Arrow Right"
                className="h-4 w-4"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
