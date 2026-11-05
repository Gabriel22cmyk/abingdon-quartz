'use client'

import { useState } from 'react'

interface Quartz {
  id: string
  name: string
  image: string
  category: string
}

interface QuartzGridProps {
  onSelect: (quartz: Quartz) => void
}

const quartzDesigns: Quartz[] = [
  { id: '1', name: 'Amber', image: 'https://fugenstone.co.uk/wp-content/uploads/2023/12/Amber-Tile-683x1024.jpg', category: 'Warm' },
  { id: '2', name: 'Arabescato', image: 'https://fugenstone.co.uk/wp-content/uploads/2023/12/441_FUGENSTONE_ARABESCATO_445-2.jpg', category: 'Marble' },
  { id: '3', name: 'Arabesque', image: 'https://fugenstone.co.uk/wp-content/uploads/2023/12/441_FUGENSTONE_ARABESQUE_461.jpg', category: 'Marble' },
  { id: '4', name: 'Aurora Wave', image: 'https://fugenstone.co.uk/wp-content/uploads/2026/06/Aurora-Wave-ver-683x1024.jpg', category: 'Veined' },
  { id: '5', name: 'Avalanche', image: 'https://fugenstone.co.uk/wp-content/uploads/2024/02/441_FUGENSTONE_AVALANCHE_057-1.jpg', category: 'White' },
  { id: '6', name: 'Black Mirror', image: 'https://fugenstone.co.uk/wp-content/uploads/2023/12/Black-mirror.jpg', category: 'Dark' },
  { id: '7', name: 'Black Shimmer', image: 'https://fugenstone.co.uk/wp-content/uploads/2023/12/Black-Shimmer.jpg', category: 'Dark' },
  { id: '8', name: 'Blanco Noir', image: 'https://fugenstone.co.uk/wp-content/uploads/2024/09/Blanco-Noir-Tile-1.png', category: 'Veined' },
  { id: '9', name: 'Calacatta Oro', image: 'https://fugenstone.co.uk/wp-content/uploads/2023/12/441_FUGENSTONE_CALACATA_ORA_309-1.jpg', category: 'Marble' },
  { id: '10', name: 'Carbon', image: 'https://fugenstone.co.uk/wp-content/uploads/2023/12/441_FUGENSTONE_CARBON_105.jpg', category: 'Dark' },
  { id: '11', name: 'Carrara', image: 'https://fugenstone.co.uk/wp-content/uploads/2023/12/441_FUGENSTONE_CARRARA_072-2.jpg', category: 'Marble' },
  { id: '12', name: 'Carrara Pulido', image: 'https://fugenstone.co.uk/wp-content/uploads/2023/12/441_FUGENSTONE_CARRARA_PULIDO_067-2.jpg', category: 'Marble' },
  { id: '13', name: 'Carrara Satinato', image: 'https://fugenstone.co.uk/wp-content/uploads/2023/12/441_FUGENSTONE_CARRARA_PULIDO_067-2.jpg', category: 'Marble' },
  { id: '14', name: 'Carrara Super Jumbo', image: 'https://fugenstone.co.uk/wp-content/uploads/2023/12/441_FUGENSTONE_CARRARA_SJ_025-3.jpg', category: 'Marble' },
  { id: '15', name: 'Caspian', image: 'https://fugenstone.co.uk/wp-content/uploads/2024/09/Caspian-Tile.png', category: 'Veined' },
  { id: '16', name: 'Celestial', image: 'https://fugenstone.co.uk/wp-content/uploads/2024/09/Celestial-Tile-Image-2-3-682x1024.jpg', category: 'White' },
  { id: '17', name: 'Cotswold Gold', image: 'https://fugenstone.co.uk/wp-content/uploads/2025/07/C-gold-e1752752935523.jpeg', category: 'Warm' },
  { id: '18', name: 'Cotswold White', image: 'https://fugenstone.co.uk/wp-content/uploads/2024/09/Cotslwold-2-3-Tile-683x1024.png', category: 'White' },
  { id: '19', name: 'Cream Mirror', image: 'https://fugenstone.co.uk/wp-content/uploads/2023/12/Cream-mirror.jpg', category: 'Warm' },
  { id: '20', name: 'Dark Grey', image: 'https://fugenstone.co.uk/wp-content/uploads/2023/12/441_FUGENSTONE_DARK_GREY_214-1_LF.jpg', category: 'Grey' },
  { id: '21', name: 'Desert Salt', image: 'https://fugenstone.co.uk/wp-content/uploads/2026/06/Desert-Salt-ver-683x1024.jpg', category: 'Warm' },
  { id: '22', name: 'Dune Frost', image: 'https://fugenstone.co.uk/wp-content/uploads/2026/06/Dune-Frost-ver-1-683x1024.jpg', category: 'White' },
  { id: '23', name: 'Enigma', image: 'https://fugenstone.co.uk/wp-content/uploads/2024/02/441_FUGENSTONE_ENIGMA_037-1.jpg', category: 'Veined' },
  { id: '24', name: 'Everest', image: 'https://fugenstone.co.uk/wp-content/uploads/2024/10/EVEREST_Detail-2.3-tile-1.png', category: 'White' },
  { id: '25', name: 'Florence', image: 'https://fugenstone.co.uk/wp-content/uploads/2024/02/441_FUGENSTONE_FLORENCE_042-1.jpg', category: 'Marble' },
  { id: '26', name: 'Gilded Chalk', image: 'https://fugenstone.co.uk/wp-content/uploads/2026/06/Gilded-Chalk-ver-683x1024.jpg', category: 'Warm' },
  { id: '27', name: 'Grey Mirror', image: 'https://fugenstone.co.uk/wp-content/uploads/2023/12/GREY_MIRROR_Tile-Corrected-683x1024.jpeg', category: 'Grey' },
  { id: '28', name: 'Grey Shimmer', image: 'https://fugenstone.co.uk/wp-content/uploads/2023/12/Grey-Shimmer-Tile-Corrected-683x1024.jpeg', category: 'Grey' },
  { id: '29', name: 'Imperium', image: 'https://fugenstone.co.uk/wp-content/uploads/2023/12/441_FUGENSTONE_IMPERIUM_478.jpg', category: 'Marble' },
  { id: '30', name: 'Irini', image: 'https://fugenstone.co.uk/wp-content/uploads/2023/12/441_FUGENSTONE_IRINI_349-1.jpg', category: 'Marble' },
  { id: '31', name: 'Jasper', image: 'https://fugenstone.co.uk/wp-content/uploads/2023/12/441_FUGENSTONE_JASPER_152.jpg', category: 'Grey' },
  { id: '32', name: 'Juniper', image: 'https://fugenstone.co.uk/wp-content/uploads/2026/06/Juniper-ver-683x1024.jpg', category: 'Veined' },
  { id: '33', name: 'Marfil Luxe', image: 'https://fugenstone.co.uk/wp-content/uploads/2024/09/Marfil-Luxe-Tile--683x1024.jpg', category: 'Warm' },
  { id: '34', name: 'Matrix Leather', image: 'https://fugenstone.co.uk/wp-content/uploads/2024/09/Matrix-Tile-683x1024.jpg', category: 'Dark' },
  { id: '35', name: 'Memory', image: 'https://fugenstone.co.uk/wp-content/uploads/2026/06/Memory-ver-683x1024.jpg', category: 'Veined' },
  { id: '36', name: 'Moon Lace', image: 'https://fugenstone.co.uk/wp-content/uploads/2026/06/Moon-lace-ver-683x1024.jpg', category: 'White' },
  { id: '37', name: 'Niagara', image: 'https://fugenstone.co.uk/wp-content/uploads/2023/12/441_FUGENSTONE_NIAGRA_362.jpg', category: 'Veined' },
  { id: '38', name: 'Noor', image: 'https://fugenstone.co.uk/wp-content/uploads/2026/06/Noor-ver-683x1024.jpg', category: 'Warm' },
  { id: '39', name: 'Polar White', image: 'https://fugenstone.co.uk/wp-content/uploads/2023/12/441_FUGENSTONE_POLAR_WHITE_146.jpg', category: 'White' },
  { id: '40', name: 'Roma', image: 'https://fugenstone.co.uk/wp-content/uploads/2024/09/Roma-Tile-683x1024.jpg', category: 'Marble' },
  { id: '41', name: 'Sahara Waves', image: 'https://fugenstone.co.uk/wp-content/uploads/2024/09/Sahara-Waves-Tile.jpg', category: 'Warm' },
  { id: '42', name: 'Silver Drift', image: 'https://fugenstone.co.uk/wp-content/uploads/2026/01/Silver-Drift-v.jpg', category: 'Grey' },
  { id: '43', name: 'Soft Day', image: 'https://fugenstone.co.uk/wp-content/uploads/2026/06/Soft-day-ver-683x1024.jpg', category: 'White' },
  { id: '44', name: 'Sunbeams', image: 'https://fugenstone.co.uk/wp-content/uploads/2026/06/Sunbeams-ver-683x1024.jpg', category: 'Warm' },
  { id: '45', name: 'Super White', image: 'https://fugenstone.co.uk/wp-content/uploads/2023/12/441_FUGENSTONE_SUPER_WHITE_139-2.jpg', category: 'White' },
  { id: '46', name: 'Supernova', image: 'https://fugenstone.co.uk/wp-content/uploads/2026/06/Supernova-ver-683x1024.jpg', category: 'Veined' },
  { id: '47', name: 'Tuscany', image: 'https://fugenstone.co.uk/wp-content/uploads/2023/12/441_FUGENSTONE_TUSCANY_031.jpg', category: 'Marble' },
  { id: '48', name: 'Valley White', image: 'https://fugenstone.co.uk/wp-content/uploads/2023/12/441_FUGENSTONE_VALLEY_WHITE_131.jpg', category: 'White' },
  { id: '49', name: 'Volakas', image: 'https://fugenstone.co.uk/wp-content/uploads/2024/09/Volakas-Tile-2-3.jpg', category: 'Marble' },
  { id: '50', name: 'Whisper Ash', image: 'https://fugenstone.co.uk/wp-content/uploads/2026/06/Whisper-Ash-ver-683x1024.jpg', category: 'Grey' },
  { id: '51', name: 'White Mirror', image: 'https://fugenstone.co.uk/wp-content/uploads/2023/12/441_FUGENSTONE_WHITE_MIRROR_426.jpg', category: 'White' },
  { id: '52', name: 'White Shimmer', image: 'https://fugenstone.co.uk/wp-content/uploads/2023/12/441_FUGENSTONE_WHITE_SHIMMER_402.jpg', category: 'White' },
]

export default function QuartzGrid({ onSelect }: QuartzGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = ['All', ...Array.from(new Set(quartzDesigns.map(q => q.category)))]
  const filteredDesigns = selectedCategory === null || selectedCategory === 'All'
    ? quartzDesigns
    : quartzDesigns.filter(q => q.category === selectedCategory)

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category === 'All' ? null : category)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 text-sm ${
              (category === 'All' && selectedCategory === null) || selectedCategory === category
                ? 'bg-gold text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-center text-gray-500 mb-8 text-sm">
        Showing {filteredDesigns.length} design{filteredDesigns.length !== 1 ? 's' : ''}
      </p>

      {/* Quartz Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {filteredDesigns.map(quartz => (
          <div
            key={quartz.id}
            className="group rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gold/10 hover:border-gold/30"
            onClick={() => onSelect(quartz)}
          >
            {/* Image */}
            <div className="relative aspect-[2/3] overflow-hidden bg-gray-100">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${quartz.image})` }}
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span className="bg-gold text-white px-5 py-2 rounded-lg font-semibold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Inquire Now
                </span>
              </div>
            </div>

            {/* Name */}
            <div className="p-4 text-center">
              <h3 className="font-semibold text-light-brown group-hover:text-gold transition-colors text-sm">
                {quartz.name}
              </h3>
              <p className="text-xs text-gray-400 mt-1">{quartz.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
