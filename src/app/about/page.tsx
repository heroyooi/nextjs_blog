import Hero from '@/components/Hero';

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-2';

export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className='bg-gray-100 shadow-lg p-8 m-8 text-center'>
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          개발을 사랑하는 풀스택 개발자 <br />
          사람과 디자인을 담는 웹앱을 만들고 있음
        </p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>
          메가스터디교육 (-Now) <br />
          폴라리움 (-2022.04) <br />
          브라이니클 (-2017.09) <br />
          디자인크리에이티브 (-2017.01) <br />
          미플즈 (-2015.09) <br />
          비즈벨리 (-2014.08)
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          React, Vue. Node
          <br />
          Git, Clean Code <br />
          VS Code, IntelliJ, MongoDB
        </p>
      </section>
    </>
  );
}
