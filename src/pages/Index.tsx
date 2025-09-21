import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="font-bold text-2xl text-primary">ROVER</div>
          <div className="hidden md:flex space-x-8">
            <a href="#hero" className="text-muted-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#technologies" className="text-muted-foreground hover:text-primary transition-colors">Технологии</a>
            <a href="#safety" className="text-muted-foreground hover:text-primary transition-colors">Безопасность</a>
            <a href="#capabilities" className="text-muted-foreground hover:text-primary transition-colors">Возможности</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button variant="outline" className="md:hidden">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="py-20 animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold text-foreground mb-6 animate-slide-up">
            Автономная доставка<br />
            <span className="text-primary">будущего</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
            ROVER — интеллектуальный робот-доставщик, который революционизирует логистику
            с помощью передовых технологий навигации и безопасности
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
            <Button size="lg" className="px-8">
              Заказать демо
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Смотреть видео
              <Icon name="Play" size={20} className="ml-2" />
            </Button>
          </div>
          <div className="mt-12 animate-slide-up" style={{animationDelay: '0.6s'}}>
            <img 
              src="/img/579e4bbb-01cd-4c1e-8a88-a4242fcf9fad.jpg" 
              alt="ROVER робот-доставщик" 
              className="mx-auto max-w-lg w-full rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Передовые технологии</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Интеллектуальные системы навигации и машинного обучения обеспечивают
              точную и безопасную доставку в любых условиях
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Navigation" size={32} className="text-primary" />
                </div>
                <CardTitle>ИИ Навигация</CardTitle>
                <CardDescription>
                  Компьютерное зрение и машинное обучение для точного определения маршрута
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Radar" size={32} className="text-primary" />
                </div>
                <CardTitle>LiDAR сенсоры</CardTitle>
                <CardDescription>
                  Лазерное сканирование окружения для обнаружения препятствий в реальном времени
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Wifi" size={32} className="text-primary" />
                </div>
                <CardTitle>5G связь</CardTitle>
                <CardDescription>
                  Постоянная связь с облачной системой управления для координации маршрутов
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section id="safety" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Безопасность превыше всего</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Многоуровневая система безопасности гарантирует защиту груза и окружающих
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Защищенный отсек</h3>
                    <p className="text-muted-foreground">Электронная блокировка и система контроля доступа</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Eye" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Видеонаблюдение</h3>
                    <p className="text-muted-foreground">360° камеры с записью и передачей данных в реальном времени</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="AlertTriangle" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Экстренная остановка</h3>
                    <p className="text-muted-foreground">Автоматическое торможение при обнаружении препятствий</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8">
                <Icon name="Lock" size={120} className="text-primary mx-auto opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Возможности ROVER</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Гибкая система доставки, адаптирующаяся под любые потребности
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Icon name="Package" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">50 кг</CardTitle>
                <CardDescription>Максимальная грузоподъемность</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Icon name="Gauge" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">25 км/ч</CardTitle>
                <CardDescription>Максимальная скорость</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Icon name="Battery" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">12 часов</CardTitle>
                <CardDescription>Время автономной работы</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Icon name="MapPin" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">20 км</CardTitle>
                <CardDescription>Радиус доставки</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">
                Готовы внедрить ROVER в вашу логистическую систему?
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Оставьте заявку</h3>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Input placeholder="Имя" />
                    </div>
                    <div>
                      <Input placeholder="Фамилия" />
                    </div>
                  </div>
                  <Input type="email" placeholder="Email" />
                  <Input placeholder="Компания" />
                  <Textarea placeholder="Расскажите о ваших потребностях в доставке" className="min-h-[120px]" />
                  <Button size="lg" className="w-full">
                    Отправить заявку
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>
                </form>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Icon name="Phone" size={20} className="text-primary" />
                      <span>+7 (495) 123-45-67</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Icon name="Mail" size={20} className="text-primary" />
                      <span>info@rover-robotics.ru</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Icon name="MapPin" size={20} className="text-primary" />
                      <span>Москва, Сколково, ул. Технологическая, 1</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Преимущества работы с нами:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span className="text-sm">Бесплатное тестирование 30 дней</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span className="text-sm">Техническая поддержка 24/7</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span className="text-sm">Индивидуальная настройка под задачи</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span className="text-sm">Обучение персонала</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="font-bold text-2xl mb-4">ROVER</div>
              <p className="text-background/80 mb-4">
                Автономные роботы-доставщики для эффективной логистики будущего
              </p>
              <div className="flex space-x-4">
                <Icon name="Github" size={20} className="text-background/60 hover:text-background cursor-pointer transition-colors" />
                <Icon name="Twitter" size={20} className="text-background/60 hover:text-background cursor-pointer transition-colors" />
                <Icon name="Linkedin" size={20} className="text-background/60 hover:text-background cursor-pointer transition-colors" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#technologies" className="hover:text-background transition-colors">Технологии</a></li>
                <li><a href="#safety" className="hover:text-background transition-colors">Безопасность</a></li>
                <li><a href="#capabilities" className="hover:text-background transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Документация</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-background transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Карьера</a></li>
                <li><a href="#contact" className="hover:text-background transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Пресс-центр</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2024 ROVER Robotics. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;