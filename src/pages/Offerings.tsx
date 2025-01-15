export function Offerings() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Our Offerings</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Service Offerings */}
        <div className="rounded-lg bg-card p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Consulting Services</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="mr-2">→</span>
              Technical Architecture
            </li>
            <li className="flex items-center">
              <span className="mr-2">→</span>
              Code Review
            </li>
            <li className="flex items-center">
              <span className="mr-2">→</span>
              Performance Optimization
            </li>
          </ul>
        </div>
        <div className="rounded-lg bg-card p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Development</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="mr-2">→</span>
              Custom Software
            </li>
            <li className="flex items-center">
              <span className="mr-2">→</span>
              API Integration
            </li>
            <li className="flex items-center">
              <span className="mr-2">→</span>
              Database Design
            </li>
          </ul>
        </div>
        <div className="rounded-lg bg-card p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="mr-2">→</span>
              24/7 Maintenance
            </li>
            <li className="flex items-center">
              <span className="mr-2">→</span>
              System Updates
            </li>
            <li className="flex items-center">
              <span className="mr-2">→</span>
              Security Patches
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
} 