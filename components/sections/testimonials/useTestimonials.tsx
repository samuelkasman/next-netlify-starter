import React, { useState } from 'react'

export const useTestimonials = () => {
  const [selectedItem, setSelectedItem] = useState<number>(0)

  const items = [
    {
      text: (
        <>
          "Bacon ipsum dolor sit amet drumstick turkey chicken, tail venison
          beef tenderloin bacon meatloaf leberkas shankle doner. Sirloin
          hamburger bacon buffalo, frankfurter turducken chuck pancetta."
        </>
      ),
      name: <>Meatlover</>,
      date: <>Steakville</>,
    },
    {
      text: (
        <>
          "Cupcake ipsum dolor sit amet carrot cake liquorice. Dragée oat cake
          cotton candy jelly pie cheesecake soufflé macaroon. Sesame snaps
          halvah apple pie fruitcake brownie donut powder powder gummies."
        </>
      ),
      name: <>Sweet tooth</>,
      date: <>Banana republic</>,
    },
    {
      text: (
        <>
          "Cheese ipsum dolor sit amet dolcelatte parmesan mascarpone. Airedale
          caerphilly blue castello cheese triangles melted cheese. Cheese and
          wine cheese on toast pecorino cheesy feet croque monsieur babybel
          pepper jack blue castello. Red leicester dolcelatte lancashire."
        </>
      ),
      name: <>Cheesy guy</>,
      date: <>Cheesetown</>,
    },
    {
      text: (
        <>
          "Fish ipsum dolor sit amet tuna salmon yellowtail kingfish demoiselle
          woody sculpin lungfish Black angelfish flying gurnard. Pike red
          snapper Black mackerel velvetfish longfin clownfish garden eel."
        </>
      ),
      name: <>Fisherman</>,
      date: <>Bay</>,
    },
  ]

  return {
    selectedItem,
    setSelectedItem,
    items,
  }
}
