import { MapPin, Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react"

const Aboutus = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1600&auto=format&fit=crop/height=600&width=1600"
            alt="Fashion background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Unsere Geschichte</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Wir kreieren Mode, die Menschen inspiriert und ihnen hilft, ihren persönlichen Stil auszudrücken.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Wie alles begann</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                Unser Unternehmen wurde 2015 von zwei Freunden gegründet, die eine gemeinsame Leidenschaft für
                nachhaltige Mode und zeitloses Design teilten. Was als kleines Projekt in einer Garage begann, ist heute
                zu einer bekannten Marke herangewachsen.
              </p>
              <p className="mt-4">
                Wir begannen mit einer einfachen Idee: Qualitativ hochwertige Kleidung anzubieten, die sowohl stilvoll
                als auch nachhaltig ist. Über die Jahre haben wir unser Sortiment erweitert, aber unsere Grundwerte sind
                dieselben geblieben.
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1600&auto=format&fit=crop?height=500&width=600"
              alt="Gründer des Unternehmens"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

    
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Unsere Mission & Werte</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-emerald-600 mb-4">Nachhaltigkeit</h3>
              <p className="text-gray-600">
                Wir verpflichten uns zu umweltfreundlichen Praktiken in unserer gesamten Lieferkette. Von der
                Materialauswahl bis zur Verpackung - Nachhaltigkeit steht im Mittelpunkt unseres Handelns.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-emerald-600 mb-4">Qualität</h3>
              <p className="text-gray-600">
                Jedes unserer Produkte wird mit höchster Sorgfalt hergestellt. Wir verwenden nur die besten Materialien
                und arbeiten mit erfahrenen Handwerkern zusammen, um langlebige Kleidungsstücke zu schaffen.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-emerald-600 mb-4">Fairness</h3>
              <p className="text-gray-600">
                Wir glauben an faire Arbeitsbedingungen und angemessene Entlohnung für alle, die an der Herstellung
                unserer Produkte beteiligt sind. Transparenz und ethisches Handeln sind für uns nicht verhandelbar.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Unser Team</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Hinter unseren Produkten steht ein engagiertes Team von Designern, Handwerkern und Modeexperten.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Anna Schmidt", role: "Gründerin & CEO", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop?height=300&width=300" },
            { name: "Thomas Weber", role: "Kreativdirektor", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop?height=300&width=300" },
            { name: "Laura Müller", role: "Nachhaltigkeitsmanagerin", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop?height=300&width=300" },
            { name: "Michael Bauer", role: "Leiter Produktion", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop?height=300&width=300" },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative mx-auto w-40 h-40 rounded-full overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
              <p className="text-emerald-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>


      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Unser Herstellungsprozess</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Wir arbeiten mit sorgfältig ausgewählten Partnern zusammen, die unsere Werte teilen. Unsere Kleidung
                  wird in zertifizierten Fabriken hergestellt, die faire Arbeitsbedingungen garantieren.
                </p>
                <p className="mt-4">
                  Wir verwenden hauptsächlich Bio-Baumwolle, recycelte Materialien und innovative nachhaltige Stoffe.
                  Jedes Kleidungsstück durchläuft strenge Qualitätskontrollen, bevor es zu dir kommt.
                </p>
                <p className="mt-4">
                  Transparenz ist uns wichtig - deshalb kannst du auf unserer Website den Ursprung jedes Produkts
                  nachverfolgen und mehr über unsere Lieferkette erfahren.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop?height=500&width=600"
                alt="Herstellungsprozess"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

 
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Was unsere Kunden sagen</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Julia K.",
              text: "Die Qualität der Kleidung ist hervorragend. Ich trage meine Lieblingsstücke seit Jahren und sie sehen immer noch aus wie neu.",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop?height=100&width=100",
            },
            {
              name: "Markus H.",
              text: "Endlich eine Marke, die Nachhaltigkeit ernst nimmt! Der Kundenservice ist außerdem erstklassig.",
              image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop?height=100&width=100",
            },
            {
              name: "Sophie W.",
              text: "Stylische Designs und faire Produktion - was will man mehr? Ich bin ein großer Fan und empfehle die Marke allen meinen Freunden.",
              image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop?height=100&width=100",
            },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>

     
    
    </div>
  )
}

export default Aboutus
