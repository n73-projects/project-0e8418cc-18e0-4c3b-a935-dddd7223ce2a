import { Button } from "./components/ui/button";
import { CheckCircle, Filter, Users, Clock, TrendingUp, Star, ArrowRight, Brain, Target, Shield } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Filter className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-slate-800">TalentSift</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="text-slate-600 hover:text-blue-600 font-medium">Features</a>
            <a href="#how-it-works" className="text-slate-600 hover:text-blue-600 font-medium">How it Works</a>
            <a href="#pricing" className="text-slate-600 hover:text-blue-600 font-medium">Pricing</a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Stop Reading Every 
              <span className="text-blue-600"> Job Application</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Our AI-powered filtering system instantly identifies the best-fit software developer candidates, 
              saving you hours of screening time while ensuring you never miss top talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
                Try Free for 14 Days
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                Watch Demo
              </Button>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              ✓ No credit card required  ✓ Setup in under 5 minutes
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">85%</div>
              <p className="text-slate-600">Time Saved on Screening</p>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">92%</div>
              <p className="text-slate-600">Accuracy in Candidate Matching</p>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">3x</div>
              <p className="text-slate-600">Faster Hiring Process</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Smart Features That Save Time
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Advanced AI algorithms analyze resumes, portfolios, and technical skills to surface only the candidates worth your time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <Brain className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI-Powered Analysis</h3>
              <p className="text-slate-600">
                Our machine learning models analyze technical skills, experience, and project quality to rank candidates automatically.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <Target className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Custom Criteria Matching</h3>
              <p className="text-slate-600">
                Set your specific requirements for tech stack, experience level, and company culture fit for precise matching.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <Shield className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Bias-Free Screening</h3>
              <p className="text-slate-600">
                Eliminate unconscious bias by focusing purely on technical qualifications and relevant experience.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <Clock className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Instant Processing</h3>
              <p className="text-slate-600">
                Process hundreds of applications in minutes, not hours. Get ranked results delivered to your inbox.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <TrendingUp className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Insights</h3>
              <p className="text-slate-600">
                Get detailed insights on why candidates were ranked highly or flagged for specific skills gaps.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <Users className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Team Collaboration</h3>
              <p className="text-slate-600">
                Share filtered results with your team, add notes, and collaborate on hiring decisions seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              How TalentSift Works
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From application upload to candidate recommendations in just a few clicks.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Upload Applications</h3>
              <p className="text-slate-600">
                Simply upload your job applications in bulk via our secure portal. We support PDFs, Word docs, and more.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">AI Analysis</h3>
              <p className="text-slate-600">
                Our AI analyzes each application for technical skills, experience, project quality, and job requirements match.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Get Results</h3>
              <p className="text-slate-600">
                Receive ranked candidate lists with detailed insights, so you can focus on interviewing only the best fits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            Trusted by Leading Tech Companies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 mb-4">
                "TalentSift cut our screening time by 80%. We now spend our time on quality interviews instead of reading resumes."
              </p>
              <p className="font-semibold text-slate-900">Sarah Chen, CTO at TechFlow</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 mb-4">
                "The accuracy is incredible. Every recommended candidate was genuinely a great fit for our team."
              </p>
              <p className="font-semibold text-slate-900">Mike Rodriguez, Lead Developer</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 mb-4">
                "Finally, a tool that understands what we actually need in a developer. Game-changing for our hiring process."
              </p>
              <p className="font-semibold text-slate-900">Lisa Park, HR Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-600">
              Start free, scale as you grow. No hidden fees, no long-term contracts.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Starter</h3>
              <div className="text-3xl font-bold text-slate-900 mb-2">Free</div>
              <p className="text-slate-600 mb-6">Perfect for small teams</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-slate-600">Up to 50 applications/month</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-slate-600">Basic AI filtering</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-slate-600">Email support</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Get Started
              </Button>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl border-2 border-blue-200 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Professional</h3>
              <div className="text-3xl font-bold text-slate-900 mb-2">$49<span className="text-lg text-slate-600">/month</span></div>
              <p className="text-slate-600 mb-6">For growing companies</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-slate-600">Up to 500 applications/month</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-slate-600">Advanced AI + custom criteria</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-slate-600">Team collaboration</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-slate-600">Priority support</span>
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Start Free Trial
              </Button>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Enterprise</h3>
              <div className="text-3xl font-bold text-slate-900 mb-2">Custom</div>
              <p className="text-slate-600 mb-6">For large organizations</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-slate-600">Unlimited applications</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-slate-600">Custom AI models</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-slate-600">API integration</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-slate-600">Dedicated support</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Hiring?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of companies using TalentSift to find better developers faster. 
            Start your free trial today and see the difference AI can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-blue-600">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Filter className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">TalentSift</span>
              </div>
              <p className="text-slate-300">
                AI-powered candidate screening that helps you hire the best developers faster.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
                <li><a href="#" className="hover:text-white">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-300">
            <p>&copy; 2024 TalentSift. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
