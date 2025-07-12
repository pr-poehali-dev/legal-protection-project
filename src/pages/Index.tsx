import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-open-sans">
      {/* Героическая секция */}
      <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          {/* Анимированная SVG иконка */}
          <div className="mb-16 relative">
            <div className="w-64 h-64 mx-auto relative animate-pulse">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Основание весов */}
                <rect
                  x="95"
                  y="160"
                  width="10"
                  height="30"
                  fill="#D1D5DB"
                  className="animate-fade-in"
                />
                <ellipse
                  cx="100"
                  cy="185"
                  rx="40"
                  ry="8"
                  fill="#9CA3AF"
                  className="animate-fade-in"
                />

                {/* Столб */}
                <rect
                  x="98"
                  y="60"
                  width="4"
                  height="100"
                  fill="#374151"
                  className="animate-fade-in"
                />

                {/* Коромысло */}
                <rect
                  x="50"
                  y="58"
                  width="100"
                  height="4"
                  fill="#F59E0B"
                  className="animate-fade-in"
                />

                {/* Левая чаша */}
                <ellipse
                  cx="65"
                  cy="70"
                  rx="20"
                  ry="6"
                  fill="#F59E0B"
                  className="animate-fade-in"
                />
                <path
                  d="M 45 70 Q 45 85 65 85 Q 85 85 85 70"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="2"
                  className="animate-fade-in"
                />

                {/* Правая чаша */}
                <ellipse
                  cx="135"
                  cy="70"
                  rx="20"
                  ry="6"
                  fill="#F59E0B"
                  className="animate-fade-in"
                />
                <path
                  d="M 115 70 Q 115 85 135 85 Q 155 85 155 70"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="2"
                  className="animate-fade-in"
                />

                {/* Цепочки */}
                <line
                  x1="65"
                  y1="62"
                  x2="65"
                  y2="70"
                  stroke="#6B7280"
                  strokeWidth="1"
                  className="animate-fade-in"
                />
                <line
                  x1="135"
                  y1="62"
                  x2="135"
                  y2="70"
                  stroke="#6B7280"
                  strokeWidth="1"
                  className="animate-fade-in"
                />

                {/* Декоративные элементы */}
                <circle
                  cx="100"
                  cy="60"
                  r="8"
                  fill="#F59E0B"
                  className="animate-glow"
                />
                <circle cx="100" cy="60" r="4" fill="#FCD34D" />
              </svg>
            </div>
          </div>

          <h1 className="text-7xl font-bold font-montserrat mb-12 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent leading-tight">
            Сила Закона.
            <br />
            <span className="text-5xl text-accent">Ваша Защита.</span>
          </h1>

          <blockquote className="text-2xl italic text-gray-600 mb-8 font-merriweather max-w-3xl mx-auto leading-relaxed">
            "Правосудие – это твердая решимость охранять права каждого."
          </blockquote>
          <p className="text-lg text-gray-500 mb-12 font-medium">
            — Аристотель
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <p className="text-3xl font-bold text-gray-800 mb-3 font-montserrat">
              Адвокатское Бюро "Правовая Защита"
            </p>
            <p className="text-xl text-gray-600 mb-2">
              Ваша надежная юридическая поддержка
            </p>
            <p className="text-gray-500">
              Защита ваших прав и законных интересов - наша главная задача
            </p>
          </div>

          <div className="absolute bottom-12 right-12">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center hover:rotate-12 hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg">
              <Icon name="Shield" size={36} className="text-accent" />
            </div>
          </div>
        </div>
      </section>

      {/* Секция команды */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20 font-montserrat text-gray-800">
            Наша Команда. <span className="text-accent">Ваша Сила.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Анна Владимировна",
                surname: "Петрова",
                specialty: "Уголовное право",
                motto: "Защита прав с полной ответственностью",
                image: "/img/be9c6ef1-2a7d-4b27-b3c1-b22ffe9a7aa7.jpg",
              },
              {
                name: "Михаил Сергеевич",
                surname: "Волков",
                specialty: "Гражданские споры",
                motto: "Гарантия справедливости и профессионализма",
                image: "/img/6ddb7eaa-32f3-464c-891a-9dac28026a69.jpg",
              },
              {
                name: "Елена Андреевна",
                surname: "Сидорова",
                specialty: "Земельное законодательство",
                motto: "Комплексный подход к решению задач",
                image: "/img/be9c6ef1-2a7d-4b27-b3c1-b22ffe9a7aa7.jpg",
              },
              {
                name: "Дмитрий Николаевич",
                surname: "Козлов",
                specialty: "Семейное право",
                motto: "Деликатность и внимание к деталям",
                image: "/img/6ddb7eaa-32f3-464c-891a-9dac28026a69.jpg",
              },
            ].map((lawyer, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer bg-white border-0 shadow-lg"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-36 h-36 mx-auto mb-6 rounded-2xl overflow-hidden ring-4 ring-gray-100 group-hover:ring-accent/20 transition-all duration-300">
                    <img
                      src={lawyer.image}
                      alt={`${lawyer.name} ${lawyer.surname}`}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                    />
                  </div>
                  <h3 className="text-2xl font-bold font-montserrat text-gray-800 mb-1">
                    {lawyer.name}
                  </h3>
                  <p className="text-xl text-gray-600 mb-4 font-medium">
                    {lawyer.surname}
                  </p>
                  <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
                    <p className="text-accent font-semibold">
                      {lawyer.specialty}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 italic group-hover:text-accent transition-colors leading-relaxed">
                    {lawyer.motto}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Секция услуг */}
      <section className="py-24 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20 font-montserrat text-gray-800">
            Наши Услуги. <span className="text-accent">Ваш Выбор.</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Уголовное право",
                description:
                  "Защита по уголовным делам любой сложности. Квалифицированное представительство интересов в суде.",
                examples:
                  "Защита по уголовным делам, представление интересов потерпевших, обжалование приговоров",
                icon: "Scale",
              },
              {
                title: "Гражданские споры",
                description:
                  "Разрешение имущественных и неимущественных споров. Взыскание долгов и возмещение ущерба.",
                examples:
                  "Имущественные споры, взыскание долгов, защита прав потребителей, наследственные дела",
                icon: "FileText",
              },
              {
                title: "Земельное право",
                description:
                  "Сопровождение сделок с недвижимостью. Решение земельных споров и вопросов собственности.",
                examples:
                  "Сделки с недвижимостью, оформление прав собственности, земельные споры",
                icon: "Home",
              },
              {
                title: "Семейное право",
                description:
                  "Деликатное решение семейных конфликтов. Защита интересов детей и супругов.",
                examples:
                  "Развод, раздел имущества, определение места жительства детей, алименты",
                icon: "Heart",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border-0 ${index % 2 === 0 ? "bg-gradient-to-r from-gray-50 to-white" : "bg-white"}`}
              >
                <CardContent className="p-10 flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                      <Icon
                        name={service.icon as any}
                        size={36}
                        className="text-accent"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold font-montserrat text-gray-800 mb-4 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {service.description}
                    </p>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold text-accent">
                          Включает:
                        </span>{" "}
                        {service.examples}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Секция цен */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20 font-montserrat text-gray-800">
            Цены.{" "}
            <span className="text-accent">Прозрачность и Доступность.</span>
          </h2>
          <Card className="overflow-hidden border-0 shadow-xl">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-gray-800 to-gray-700 text-white">
                    <tr>
                      <th className="p-6 text-left font-montserrat font-bold text-lg">
                        Услуга
                      </th>
                      <th className="p-6 text-center font-montserrat font-bold text-lg">
                        Стоимость
                      </th>
                      <th className="p-6 text-left font-montserrat font-bold text-lg">
                        Примечания
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        service: "Консультация юриста",
                        price: "от 3 000 ₽",
                        note: "Первичная консультация - 30 минут бесплатно",
                      },
                      {
                        service: "Представительство в суде",
                        price: "от 15 000 ₽",
                        note: "Стоимость зависит от сложности дела",
                      },
                      {
                        service: "Составление договоров",
                        price: "от 5 000 ₽",
                        note: "Цена варьируется от типа договора",
                      },
                      {
                        service: "Сопровождение сделок",
                        price: "от 25 000 ₽",
                        note: "Полное юридическое сопровождение",
                      },
                      {
                        service: "Абонентское обслуживание",
                        price: "от 30 000 ₽/мес",
                        note: "Комплексное юридическое обслуживание",
                      },
                    ].map((item, index) => (
                      <tr
                        key={index}
                        className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-accent/5 transition-colors group`}
                      >
                        <td className="p-6 font-semibold text-lg group-hover:text-accent transition-colors">
                          {item.service}
                        </td>
                        <td className="p-6 text-center font-bold text-xl text-accent">
                          {item.price}
                        </td>
                        <td className="p-6 text-gray-600">{item.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-8 bg-gradient-to-r from-accent/5 to-accent/10 border-t">
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Info"
                    size={20}
                    className="text-accent mt-1 flex-shrink-0"
                  />
                  <p className="text-gray-700 leading-relaxed">
                    Цены являются ориентировочными и могут быть изменены в
                    зависимости от сложности и обстоятельств дела. Окончательная
                    стоимость определяется после консультации.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Секция контактов */}
      <section className="py-24 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20 font-montserrat">
            Ваш Шаг к Защите.{" "}
            <span className="text-accent">Свяжитесь с Нами.</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Левая колонка */}
            <div>
              <h3 className="text-3xl font-bold font-montserrat mb-8 text-accent">
                Не оставайтесь один на один с проблемой. Обратитесь к
                профессионалам.
              </h3>
              <p className="text-gray-300 mb-12 leading-relaxed text-lg">
                Мы готовы оказать вам квалифицированную юридическую помощь в
                любой ситуации. Оставьте заявку прямо сейчас, и мы свяжемся с
                вами в ближайшее время.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl">
                  <Icon name="Mail" size={24} className="text-accent" />
                  <span className="text-lg">info@pravo-zaschita.ru</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl">
                  <Icon name="Phone" size={24} className="text-accent" />
                  <span className="text-lg">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl">
                  <Icon name="Clock" size={24} className="text-accent" />
                  <span className="text-lg">
                    Пн-Пт: 9:00-18:00, Сб: 10:00-15:00
                  </span>
                </div>
              </div>
            </div>

            {/* Правая колонка - форма */}
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
              <CardContent className="p-10">
                <form className="space-y-8">
                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-3">
                      Имя
                    </label>
                    <Input
                      placeholder="Ваше имя"
                      className="bg-white border-gray-200 text-gray-800 placeholder-gray-400 h-12 text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-3">
                      Номер телефона
                    </label>
                    <Input
                      placeholder="+7 (___) ___-__-__"
                      className="bg-white border-gray-200 text-gray-800 placeholder-gray-400 h-12 text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-3">
                      Краткое описание проблемы
                    </label>
                    <Textarea
                      placeholder="Опишите вашу ситуацию..."
                      rows={5}
                      className="bg-white border-gray-200 text-gray-800 placeholder-gray-400 text-lg"
                    />
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
