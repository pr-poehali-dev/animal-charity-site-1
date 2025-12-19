import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const animals = [
  {
    id: 1,
    name: 'Рекс',
    type: 'Собака',
    image: 'https://cdn.poehali.dev/projects/bacde58b-53bd-4a99-9f16-e96826e698c1/files/003329e4-e0c0-42fa-9b02-e66da04640fb.jpg',
    story: 'Рекс был найден на улице зимой, истощенный и напуганный. Сейчас это жизнерадостный пёс, который обожает играть и дарить любовь.',
    age: '3 года',
    rescued: 'Январь 2024'
  },
  {
    id: 2,
    name: 'Мурка',
    type: 'Кошка',
    image: 'https://cdn.poehali.dev/projects/bacde58b-53bd-4a99-9f16-e96826e698c1/files/bb721558-fdf5-4131-b4f9-4f26707d4f5b.jpg',
    story: 'Мурка попала к нам совсем маленьким котёнком. Её бросили в коробке у дороги. Теперь это ласковая кошечка, которая нашла свой дом.',
    age: '2 года',
    rescued: 'Март 2023'
  },
  {
    id: 3,
    name: 'Барсик',
    type: 'Кот',
    image: 'https://cdn.poehali.dev/projects/bacde58b-53bd-4a99-9f16-e96826e698c1/files/bb721558-fdf5-4131-b4f9-4f26707d4f5b.jpg',
    story: 'Барсик получил травму лапы и не мог передвигаться. После операции и реабилитации он полностью восстановился и снова радуется жизни.',
    age: '4 года',
    rescued: 'Июнь 2023'
  }
];

const team = [
  {
    id: 1,
    name: 'Анна Петрова',
    role: 'Главный ветеринар',
    image: 'https://cdn.poehali.dev/projects/bacde58b-53bd-4a99-9f16-e96826e698c1/files/f1ceb48f-0574-43f1-9e48-bb1440aba33d.jpg',
    description: '15 лет опыта в ветеринарии. Специализируется на хирургии и реабилитации животных.'
  },
  {
    id: 2,
    name: 'Дмитрий Соколов',
    role: 'Координатор приюта',
    image: 'https://cdn.poehali.dev/projects/bacde58b-53bd-4a99-9f16-e96826e698c1/files/4fd9a562-4250-47d1-8acb-2ccbc2c458df.jpg',
    description: 'Организует спасательные операции и управляет повседневной работой приюта.'
  },
  {
    id: 3,
    name: 'Елена Иванова',
    role: 'Руководитель волонтёров',
    image: 'https://cdn.poehali.dev/projects/bacde58b-53bd-4a99-9f16-e96826e698c1/files/d2463660-d7c3-4762-b6f5-a6ab93813762.jpg',
    description: 'Координирует работу волонтёров и помогает животным найти новые дома.'
  }
];

const Index = () => {
  const [selectedAnimal, setSelectedAnimal] = useState<number | null>(null);
  const [donationAmount, setDonationAmount] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-peach via-white to-softGreen">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-primary/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/logoza.ru (1).png" 
              alt="Добрые лапки" 
              className="h-12 w-auto"
            />
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#animals" className="text-foreground hover:text-primary transition-colors">Наши питомцы</a>
            <a href="#mission" className="text-foreground hover:text-primary transition-colors">О миссии</a>
            <a href="#team" className="text-foreground hover:text-primary transition-colors">Команда</a>
            <a href="#donate" className="text-foreground hover:text-primary transition-colors">Помочь</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <div className="mb-8">
            <img 
              src="https://cdn.poehali.dev/files/logoza.ru (1).png" 
              alt="Добрые лапки" 
              className="h-24 mx-auto mb-6"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">
            Каждая жизнь важна
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-foreground mb-4 italic">
            Помоги тем кто не может попросить
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Мы спасаем бездомных животных, лечим их и помогаем найти любящие семьи
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90">
              <Icon name="HeartHandshake" size={24} className="mr-2" />
              Помочь сейчас
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-2 border-primary text-primary hover:bg-primary/10">
              <Icon name="Users" size={24} className="mr-2" />
              Стать волонтёром
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up rounded-3xl bg-softPink/30">
              <CardContent className="pt-8 pb-8">
                <Icon name="PawPrint" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="text-3xl font-bold text-primary mb-2">350+</h3>
                <p className="text-muted-foreground">Спасённых животных</p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up [animation-delay:200ms] rounded-3xl bg-softGreen/50">
              <CardContent className="pt-8 pb-8">
                <Icon name="Home" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="text-3xl font-bold text-primary mb-2">280+</h3>
                <p className="text-muted-foreground">Нашли дом</p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up [animation-delay:400ms] rounded-3xl bg-peach">
              <CardContent className="pt-8 pb-8">
                <Icon name="Users" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="text-3xl font-bold text-primary mb-2">120+</h3>
                <p className="text-muted-foreground">Волонтёров</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="animals" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Истории спасения
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждый питомец имеет свою историю. Познакомьтесь с теми, кого мы спасли
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {animals.map((animal, index) => (
              <Card 
                key={animal.id} 
                className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer animate-scale-in rounded-3xl group"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setSelectedAnimal(selectedAnimal === animal.id ? null : animal.id)}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={animal.image} 
                    alt={animal.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{animal.name}</h3>
                    <p className="text-sm opacity-90">{animal.type} • {animal.age}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                    <Icon name="Calendar" size={16} />
                    <span>Спасён: {animal.rescued}</span>
                  </div>
                  <p className={`text-muted-foreground transition-all duration-300 ${
                    selectedAnimal === animal.id ? 'line-clamp-none' : 'line-clamp-3'
                  }`}>
                    {animal.story}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="mt-4 w-full text-primary hover:bg-primary/10"
                  >
                    {selectedAnimal === animal.id ? 'Свернуть' : 'Читать полностью'}
                    <Icon name={selectedAnimal === animal.id ? 'ChevronUp' : 'ChevronDown'} size={20} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="mission" className="py-20 px-4 bg-gradient-to-r from-softPink/30 to-softGreen/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/bacde58b-53bd-4a99-9f16-e96826e698c1/files/20872e8e-230a-484c-983b-a58e8a4ab359.jpg"
                alt="Волонтёры"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Наша миссия
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы верим, что каждое животное заслуживает любви, заботы и безопасного дома. 
                С 2020 года наша команда волонтёров работает над тем, чтобы дать второй шанс 
                бездомным и брошенным животным.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={24} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Спасение:</strong> Находим и забираем животных с улиц, из опасных ситуаций
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={24} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Лечение:</strong> Обеспечиваем полную ветеринарную помощь и реабилитацию
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={24} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Пристройство:</strong> Помогаем найти любящие семьи для каждого питомца
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Наша команда
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессионалы, которые посвятили свою жизнь спасению животных
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.id}
                className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale-in rounded-3xl overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="donate" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Поддержите наше дело
            </h2>
            <p className="text-xl text-muted-foreground">
              Ваша помощь спасает жизни
            </p>
          </div>

          <Card className="border-none shadow-2xl rounded-3xl animate-scale-in">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                {['500', '1000', '2000', '5000'].map((amount) => (
                  <Button
                    key={amount}
                    variant={donationAmount === amount ? "default" : "outline"}
                    className="text-lg py-6 rounded-2xl"
                    onClick={() => setDonationAmount(amount)}
                  >
                    {amount} ₽
                  </Button>
                ))}
              </div>

              <Input
                type="number"
                placeholder="Или введите свою сумму"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                className="mb-6 text-lg py-6 rounded-2xl"
              />

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-4 bg-peach rounded-2xl">
                  <Icon name="Syringe" size={24} className="text-primary" />
                  <div>
                    <p className="font-semibold">500 ₽</p>
                    <p className="text-sm text-muted-foreground">Вакцинация одного животного</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-softGreen rounded-2xl">
                  <Icon name="Utensils" size={24} className="text-primary" />
                  <div>
                    <p className="font-semibold">1000 ₽</p>
                    <p className="text-sm text-muted-foreground">Корм на месяц для одного питомца</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-softPink/50 rounded-2xl">
                  <Icon name="Stethoscope" size={24} className="text-primary" />
                  <div>
                    <p className="font-semibold">5000 ₽</p>
                    <p className="text-sm text-muted-foreground">Операция и восстановление</p>
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full text-lg py-6 rounded-2xl bg-primary hover:bg-primary/90"
              >
                <Icon name="Heart" size={24} className="mr-2" />
                Помочь животным
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-peach/30 to-softGreen/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-muted-foreground">
              Есть вопросы? Хотите помочь? Напишите нам!
            </p>
          </div>

          <Card className="border-none shadow-2xl rounded-3xl animate-scale-in">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input placeholder="Иван Иванов" className="rounded-2xl py-6" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="ivan@example.com" className="rounded-2xl py-6" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input type="tel" placeholder="+7 (999) 123-45-67" className="rounded-2xl py-6" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите, как мы можем помочь..." 
                    className="rounded-2xl min-h-32"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg py-6 rounded-2xl bg-primary hover:bg-primary/90"
                >
                  <Icon name="Send" size={24} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Icon name="Mail" size={24} className="mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground">help@dobryelapki.ru</p>
                  </div>
                  <div>
                    <Icon name="Phone" size={24} className="mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                  <div>
                    <Icon name="MapPin" size={24} className="mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground">Москва, Россия</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="https://cdn.poehali.dev/files/logoza.ru (1).png" 
              alt="Добрые лапки" 
              className="h-16 brightness-0 invert"
            />
          </div>
          <p className="text-white/80 mb-2 text-lg italic">
            Помоги тем кто не может попросить
          </p>
          <p className="text-white/80 mb-6">
            Вместе мы делаем мир добрее для животных
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-white/80 transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              <Icon name="Twitter" size={24} />
            </a>
          </div>
          <p className="text-sm text-white/60">
            © 2024 ДобрыеЛапки. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;