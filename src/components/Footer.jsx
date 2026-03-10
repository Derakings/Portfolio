import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-surface-base border-t border-surface-border py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Name is pulled from portfolioData.js → personalInfo.name */}
        <p className="text-gray-600 text-sm">
          &copy; {year} {personalInfo.name}. All rights reserved. 
        </p>
      </div>
    </footer>
  )
}
