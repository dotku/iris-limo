import React from 'react';
import {
  Car,
  Phone,
  Calendar,
  Shield,
  Star,
  MapPin,
  Clock,
  Users,
  Award,
} from 'lucide-react';

function App() {
  const services = [
    {
      name: '机场接送',
      image:
        'https://images.unsplash.com/photo-1566566220367-af8d77269124?auto=format&fit=crop&q=80&w=800',
      price: '150',
      description: '豪华专车机场接送服务',
    },
    {
      name: '商务用车',
      image:
        'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800',
      price: '200',
      description: '专业商务活动代驾服务',
    },
    {
      name: '葡萄酒庄游',
      image:
        'https://images.unsplash.com/photo-1598306442928-4d90f32c6866?auto=format&fit=crop&q=80&w=800',
      price: '450',
      description: '纳帕谷葡萄酒庄专业司机导览',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80&w=2000")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-3xl font-light mb-6">~爱丽丝~</h1>
              <h2 className="text-5xl font-light mb-6">湾区顶级专车服务</h2>
              <p className="text-xl mb-8 font-light">
                尊享旧金山湾区优雅出行体验
              </p>
              <button className="bg-rose-100 text-gray-800 px-8 py-3 rounded-full text-lg font-light hover:bg-rose-200 transition duration-300">
                立即预约
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-rose-400" />
              <h3 className="text-xl font-light mb-2">专业司机</h3>
              <p className="text-gray-600">经验丰富，严格筛选，专业培训</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-rose-400" />
              <h3 className="text-xl font-light mb-2">全天候服务</h3>
              <p className="text-gray-600">24小时随时待命</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-rose-400" />
              <h3 className="text-xl font-light mb-2">安全保障</h3>
              <p className="text-gray-600">全面保险覆盖，司机背景审查</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-12">尊享服务</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-light mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-light text-rose-400">
                      起价 ${service.price}
                    </span>
                    <button className="bg-rose-400 text-white px-6 py-2 rounded-full hover:bg-rose-500 transition duration-300">
                      预约
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Areas Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-12">服务区域</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 p-6 bg-rose-50 rounded-2xl">
              <MapPin className="w-8 h-8 text-rose-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-light">旧金山</h3>
                <p className="text-gray-600">市区及金融区</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-rose-50 rounded-2xl">
              <MapPin className="w-8 h-8 text-rose-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-light">硅谷</h3>
                <p className="text-gray-600">帕罗奥图、山景城、圣何塞</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-rose-50 rounded-2xl">
              <MapPin className="w-8 h-8 text-rose-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-light">酒乡</h3>
                <p className="text-gray-600">纳帕谷和索诺玛</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-rose-400 to-pink-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-light text-white mb-8">
            需要专业司机服务？
          </h2>
          <p className="text-xl text-white mb-8 font-light">
            全天候为您提供专业出行服务
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-rose-500 px-8 py-3 rounded-full text-lg font-light hover:bg-rose-50 transition duration-300">
              立即预约
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-light hover:bg-rose-400 transition duration-300">
              联系我们
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-light mb-4">联系方式</h3>
              <p>24小时调度: (510)432-0608</p>
            </div>
            <div>
              <h3 className="text-xl font-light mb-4">服务项目</h3>
              <p>机场接送</p>
              <p>商务用车</p>
              <p>酒庄游览</p>
              <p>特殊场合</p>
            </div>
            <div>
              <h3 className="text-xl font-light mb-4">服务区域</h3>
              <p>旧金山</p>
              <p>硅谷</p>
              <p>纳帕谷</p>
              <p>东湾</p>
            </div>
            <div>
              <h3 className="text-xl font-light mb-4">关注我们</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-rose-400">
                  微信
                </a>
                <a href="#" className="hover:text-rose-400">
                  小红书
                </a>
                <a href="#" className="hover:text-rose-400">
                  领英
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2025 旧金山湾区VIP专车服务. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
