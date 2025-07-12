import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-['Open_Sans']">
      {/* Героическая секция */}
      <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <img
              src="/img/d7927d30-c766-4bfc-9119-3021021222dc.jpg"
              alt="Весы правосудия"
              className="w-48 h-48 mx-auto mb-8 opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          <h1 className="text-6xl font-bold font-['Montserrat'] mb-8 bg-gradient-to-r from-blue-400 to-silver-400 bg-clip-text text-transparent">
            Сила Закона. Ваша Защита.
          </h1>
          <blockquote className="text-xl italic text-gray-300 mb-6 font-['Merriweather']">
            "Правосудие – это твердая решимость охранять права каждого."
          </blockquote>
          <p className="text-lg text-gray-400 mb-4">— Аристотель</p>
          <div className="mt-8">
            <p className="text-2xl font-semibold text-blue-400 mb-2">
              Адвокатское Бюро "Правовая Защита"
            </p>
            <p className="text-lg text-gray-300">
              Ваша надежная юридическая поддержка
            </p>
            <p className="text-md text-gray-400 mt-2">
              Защита ваших прав и законных интересов - наша главная задача
            </p>
          </div>
          <div className="absolute bottom-8 right-8">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center hover:rotate-12 transition-transform duration-300">
              <Icon name="Shield" size={32} className="text-blue-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Секция команды */}
      <section className="py-20 bg-gray-100 text-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 font-['Montserrat'] text-gray-800">
            Наша Команда. Ваша Сила.
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
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden">
                    <img
                      src={lawyer.image}
                      alt={`${lawyer.name} ${lawyer.surname}`}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold font-['Montserrat'] text-gray-800">
                    {lawyer.name}
                  </h3>
                  <p className="text-lg text-gray-600 mb-2">{lawyer.surname}</p>
                  <p className="text-blue-600 font-medium mb-3">
                    {lawyer.specialty}
                  </p>
                  <p className="text-sm text-gray-500 italic group-hover:text-blue-600 transition-colors">
                    {lawyer.motto}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Секция услуг */}
      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 font-['Montserrat'] text-gray-800">
            Наши Услуги. Ваш Выбор.
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
                className={`group hover:shadow-lg transition-all duration-300 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
              >
                <CardContent className="p-8 flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <Icon
                        name={service.icon as any}
                        size={32}
                        className="text-blue-600"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold font-['Montserrat'] text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <p className="text-sm text-gray-500">
                      <span className="font-medium">Включает:</span>{" "}
                      {service.examples}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Секция цен */}
      <section className="py-20 bg-gray-100 text-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 font-['Montserrat'] text-gray-800">
            Цены. Прозрачность и Доступность.
          </h2>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-800 text-white">
                    <tr>
                      <th className="p-4 text-left font-['Montserrat'] font-semibold">
                        Услуга
                      </th>
                      <th className="p-4 text-center font-['Montserrat'] font-semibold">
                        Стоимость
                      </th>
                      <th className="p-4 text-left font-['Montserrat'] font-semibold">
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
                        className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition-colors`}
                      >
                        <td className="p-4 font-medium">{item.service}</td>
                        <td className="p-4 text-center font-bold text-blue-600">
                          {item.price}
                        </td>
                        <td className="p-4 text-sm text-gray-600">
                          {item.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-6 bg-yellow-50 border-t">
                <p className="text-sm text-gray-600">
                  <Icon name="Info" size={16} className="inline mr-2" />
                  Цены являются ориентировочными и могут быть изменены в
                  зависимости от сложности и обстоятельств дела. Окончательная
                  стоимость определяется после консультации.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Секция контактов */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 font-['Montserrat']">
            Ваш Шаг к Защите. Свяжитесь с Нами.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Левая колонка */}
            <div>
              <h3 className="text-2xl font-bold font-['Montserrat'] mb-6 text-blue-400">
                Не оставайтесь один на один с проблемой. Обратитесь к
                профессионалам.
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Мы готовы оказать вам квалифицированную юридическую помощь в
                любой ситуации. Оставьте заявку прямо сейчас, и мы свяжемся с
                вами в ближайшее время.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-blue-400" />
                  <span>info@pravo-zaschita.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-blue-400" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-blue-400" />
                  <span>Пн-Пт: 9:00-18:00, Сб: 10:00-15:00</span>
                </div>
              </div>
            </div>

            {/* Правая колонка - форма */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Имя
                    </label>
                    <Input
                      placeholder="Ваше имя"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Номер телефона
                    </label>
                    <Input
                      placeholder="+7 (___) ___-__-__"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Краткое описание проблемы
                    </label>
                    <Textarea
                      placeholder="Опишите вашу ситуацию..."
                      rows={4}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3">
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
