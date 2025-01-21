function App() {
  return (
    <div class="container">
      <section>
        <h1>
          반갑습니다,
          <br />
          저는 노준영입니다<span class="period-mark">.</span>
        </h1>
        <p class="big-paragraph">
          저는 자기개발을 꾸준히 하며 하루하루 성장해 나가는 개발자입니다.
        </p>
        <div class="other">
          <h3>
            부경대학교<span class="period-mark">.</span>
          </h3>
          <span class="role">컴퓨터인공지능공학부</span>
          <span class="time">
            <time datetime="2019-03">2019. 03.</time> -
            <time datetime="2025-02">2025. 02.</time>
          </span>
          <p>학점 4.02 / 4.5</p>
          <p>
            예시: 컴퓨터소프트웨어공학과에서 4년간 공부하며 컴퓨터구조,
            자료구조, 컴퓨터네트워크, 웹 프로그래밍 등의 과목을 우수한 성적으로
            이수하였습니다.
          </p>
          <br></br>
          <h3>
            부산중앙고등학교<span class="period-mark">.</span>
          </h3>
          <span class="time">
            <time datetime="2016-03">2016. 03.</time> -
            <time datetime="2019-02">2019. 02.</time>
          </span>
        </div>
      </section>
      <section>
        <h2>
          Work Experience<span class="period-mark">.</span>
        </h2>
        <div class="row">
          <div class="row-left">
            <h3>
              KT AIVLE SCHOOL 6기 DX TRACK<span class="period-mark">.</span>
            </h3>
            <span class="role">Data Analyst</span>
            <span>
              {" "}
              <time datetime="2024-09">2024. 09</time> - 2025. 02{" "}
            </span>
          </div>
          <div class="row-right">
            <div class="project">
              <h4>
                부산 음주운전 예측 ~~~<span class="period-mark">.</span>
              </h4>
              <span class="time">
                <time datetime="2024-12">2024. 12</time> - 2025. 02
              </span>
              <h5>
                Description<span class="period-mark">.</span>
              </h5>
              <p>부산음주운전건수예측</p>
              <h5>
                What did I do<span class="period-mark">.</span>
              </h5>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
              <h5>
                Tech Stack<span class="period-mark">.</span>
              </h5>
              <p>pandas, matplotlib, seaborn, scikit-learn, Keras</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="row-left">
            <h3>
              캡스톤 디자인<span class="period-mark">.</span>
            </h3>
            <span class="role">Data Analyst & Front End</span>
            <span>
              {" "}
              <time datetime="2024-03">2024. 03</time> - 2024. 12{" "}
            </span>
          </div>
          <div class="row-right">
            <div class="project">
              <h4>
                수산물 가격 예측 서비스<span class="period-mark">.</span>
              </h4>
              <span class="time">
                <time datetime="2024-03">2024. 03</time> - 2024. 12
              </span>
              <h5>
                Description<span class="period-mark">.</span>
              </h5>
              <p>
                수산물 유통 시장은 계절, 기후, 어획량 등 다양한 요인에 따라 가격
                변동성이 크며, 이는 자영업자, 어부, 도매업자 등 다양한
                관계자들에게 예측 불가능한 위험을 안겨줍니다. 본 프로젝트는
                이러한 문제를 해결하고자, 수산물 도매가의 변동을 예측하는 모델과
                이를 활용한 웹 기반 서비스를 개발했습니다.
              </p>
              <h5>
                What did I do<span class="period-mark">.</span>
              </h5>
              <ul>
                <li>
                  지난 3년간의 해양기상 데이터와 노량진 수산시장의 도매 가격
                  데이터를 수집
                </li>
                <li>
                  pandas를 사용해 데이터 클렌징 및 가격 데이터의 이상치 확인 및
                  처리 수행
                </li>
                <li>
                  React를 사용하여 사용자 친화적인 웹 인터페이스를 설계 및 구현
                </li>
                <li>ApexCharts를 활용해 가격 예측 결과를 직관적으로 표현</li>
              </ul>
              <h5>
                Tech Stack<span class="period-mark">.</span>
              </h5>
              <p>pandas, matplotlib, seaborn, scikit-learn, React, node.js</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="row-left">
            <h3>
              정보 및 데이터베이스 시스템 연구실
              <span class="period-mark">.</span>
            </h3>
            <span class="role">학부생 인턴</span>
            <span>
              {" "}
              <time datetime="2023-08">2023. 08</time> - 2024.08
            </span>
          </div>
          <div class="row-right">
            <div class="project">
              <h5>
                What did I do<span class="period-mark">.</span>
              </h5>
              <ul>
                <li>
                  Classification, RNN, LSTM 모델 관련 발표 세미나를 통해
                  머신러닝과 딥러닝 기법의 이론 및 활용 방안 학습
                </li>
                <li>
                  주가 데이터를 활용하여 미래 가격을 예측하는 LSTM 기반 시계열
                  모델 설계 및 성과
                </li>
                <li>
                  연구 프로젝트 관련 데이터를 수집, 정리, 및 요약하여 교수님의
                  연구 지원
                </li>
              </ul>
              <p></p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="row-left">
            <h3>
              부경대학교 개발동아리 WAP<span class="period-mark">.</span>
            </h3>
            <span class="role">Game Developer with Data Analysis</span>
            <span>
              <time datetime="2024-03">2024. 03</time> -
              <time datetime="2024-06">2024. 06</time>
            </span>
          </div>
          <div class="row-right">
            <div class="project">
              <h4>
                Cat Town<span class="period-mark">.</span>
              </h4>
              <span class="time">
                <time datetime="2024-03">2024. 03</time> -
                <time datetime="2024-06">2024. 06</time>
              </span>
              <h5>
                Description<span class="period-mark">.</span>
              </h5>
              <p>
                고양이의 시점에서 퍼즐을 풀고 적을 피해 탈출하는 게임 개발.
                팀원들과 협업하여 Unity 엔진을 기반으로 개발
              </p>
              <h5>
                What did I do<span class="period-mark">.</span>
              </h5>
              <ul>
                <li>
                  Unity의 NavMeshAgent를 활용하여 몬스터가 플레이어를 추적하거나
                  특정 경로를 따라 이동하도록 설계
                </li>
                <li>
                  AI 적 캐릭터가 Player와 상호작용할 수 있도록 동작 패턴 및
                  상태(Idle, Chase, Attack) 설계
                </li>
              </ul>
              <h5>
                Troubleshooting<span class="period-mark">.</span>
              </h5>
              <h6>
                문제 상황: 몬스터의 속도가 정적으로 설정되어 플레이어와의 거리
                차이가 과도하게 발생
              </h6>
              <h6>
                해결 방법: Unity 내에서 몬스터의 속도와 플레이어 간의 거리
                데이터를 실시간으로 로깅 로그 데이터를 분석하여 pandas와
                matplotlib를 활용해 속도와 거리의 관계를 시각화 분석 결과를
                바탕으로 거리 비례 속도 알고리즘을 구현하여 몬스터 속도 동적
                조정
              </h6>
              <h6>
                성과: AI 몬스터의 속도가 플레이어와의 거리 차이에 비례하도록
                동적으로 조정되어, 추적 동작의 효율성과 게임플레이의 긴장감이
                향상됨. 거리 차이를 최소화함으로써 난이도 조정과 게임 밸런스
                개선에 기여
              </h6>
              <h5>
                Troubleshooting<span class="period-mark">.</span>
              </h5>
              <h6>
                문제 상황: 플레이어 리스폰 시 몬스터가 지정된 위치로 이동하지
                않는 문제 발생
              </h6>
              <h6>
                해결 방법: 충돌 로그 분석 및 다양한 테스트를 통해
                NavMeshAgent와의 충돌 문제를 파악 NavMeshAgent를 비활성화한 후
                위치 변경 및 재활성화하는 방식으로 문제 해결
              </h6>
              <h6>
                성과: NavMeshAgent의 충돌 문제를 해결하여 AI 몬스터가 지정된
                위치로 정확히 이동하도록 개선하였으며, 플레이어와의 추적 및
                상호작용 메커니즘이 정상적으로 작동해 게임플레이의 안정성과
                몰입도 향상에 기여
              </h6>
              <h5>
                Tech Stack<span class="period-mark">.</span>
              </h5>
              <p>Unity, pandas, matplotlib</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>
          Certificate<span class="period-mark">.</span>
        </h2>
        <div class="row">
          <div class="row-left"></div>
          <div class="row-right">
            <ul className="certificate-list">
              <li className="certificate-item">
                <h4 className="certificate-title">정보처리기사</h4>
                <h5 className="certificate-details">
                  2024.12 한국산업인력공단
                </h5>
              </li>
              <li className="certificate-item">
                <h4 className="certificate-title">SQLD</h4>
                <h5 className="certificate-details">
                  2024.12 한국데이터산업진흥원
                </h5>
              </li>
              <li className="certificate-item">
                <h4 className="certificate-title">ADsP</h4>
                <h5 className="certificate-details">
                  2024.11 한국데이터산업진흥원
                </h5>
              </li>
              <li className="certificate-item">
                <h4 className="certificate-title">DSAC 2급(전문가)</h4>
                <h5 className="certificate-details">2024.10 한국생산성본부</h5>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2>
          Other Experiences<span class="period-mark">.</span>
        </h2>
        <div class="other">
          <h3>
            청소년 데이터 분석·활용 공모전<span class="period-mark">.</span>
          </h3>
          <span class="role">Data Analyst</span>
          <span class="time">
            <time datetime="2024-11">2024. 11.</time> - 2024.12
          </span>
          <p>개요: 지역아동센터 프로그램 제안을 위한 데이터 기반 분석 수행</p>
          <p>
            역할: 조손가정 데이터를 분석하여 부모와의 대화 및 여가활동이
            아이들의 행복, 학업 성취, 정서적 안정에 미치는 긍정적 영향을 확인
          </p>
          <p>
            성과: 조손가정 및 지역아동센터 아이들을 대상으로 가정 내 교류를
            증진하는 프로젝트를 제안
          </p>
          <p>
            배운 점: 데이터 확보 과정에서 어려움을 겪었으나,
            한국사회보장정보원과 아동권리보장원에 데이터를 요청하여 문제를
            해결하였습니다. 하지만 데이터의 세부적인 개인화 정보가 부족하다는
            한계를 느꼈습니다. 이를 통해, 추후 직접 설문 설계를 통해 보다 정밀한
            데이터를 수집하고, AI 기반 예측 모델링을 활용하여 더욱 신뢰도 높은
            분석 결과를 도출할 것입니다.
          </p>
        </div>
        <div class="other">
          <h3>
            DIVE 2024<span class="period-mark">.</span>
          </h3>
          <span class="role">Data Analyst</span>
          <span class="time">
            <time datetime="2024-10-04">2024. 10. 03.</time> -
            <time datetime="2024-10-06">2024. 10. 06.</time>
          </span>
          <p>개요: 디지털 기술 사용이 어려운 고령층의 문제를 분석하고, 디지털 접근성을 높이기 위한 해결책을 제안</p>
          <p>
          역할:  수집한 데이터를 Brightics AI를 활용한 데이터 정제, 시각화, 통계 검증으로 주요 인사이트 도출. 데이터 분석 전 과정을 주도
          </p>
          <p>
          성과: 분석 결과를 바탕으로 AI 비서 "부손이" 및 지역 연계형 디지털 교육 프로그램 제안
          </p>
          <p>
          배운 점: Brightics AI를 활용한 데이터 정제와 시각화를 진행하며, 대규모 데이터를 효율적으로 처리하고 패턴을 시각적으로 탐구하는 역량을 키웠습니다. 특히, Brightics의 다양한 기능을 활용해 분석 속도를 높이고 데이터의 신뢰성을 확보할 수 있었습니다.
          </p>
        </div>
        <div class="other">
          <h3>
            Blog<span class="period-mark">.</span>
          </h3>
          <span class="time">
            <time datetime="2024-09">2024. 09.</time> - 현재
          </span>
          <p>
            <a href="https://velog.io/@junyoung0123/posts" target="_blank">
              벨로그
            </a>
            ?
            <a href="https://blog.naver.com/njy3006" target="_blank">
              네이버 블로그
            </a>
            이라는 이름의 블로그를 운영했습니다.
          </p>
        </div>
      </section>
      <section>
        <h2>
          Skills<span class="period-mark">.</span>
        </h2>
        <div class="other">
          <h3>
            Overall<span class="period-mark">.</span>
          </h3>
          <ul>
            <li>
              아름다운 유저 인터페이스 및 미려한 애니메이션 구현을 좋아합니다.
            </li>
            <li>
              항상 최신의 기술이 옳다고 여기지 않습니다. 상황에 따라 적절한
              선택이 있다고 믿습니다.
            </li>
            <li>
              업무에 필요하다면 능숙한 분야가 아니더라도 적극적으로 탐색하여
              최적의 결과를 낼 수 있도록 노력합니다.
            </li>
            <li>
              회사 혹은 팀의 프로세스 및 문화를 개선하거나 바꾸려는 시도를
              적극적으로 합니다.
            </li>
          </ul>
        </div>
        <div class="other">
          <h3>
            Communication<span class="period-mark">.</span>
          </h3>
          <ul>
            <li>직위 및 포지션에 관계없이 적극적으로 생각을 표현합니다.</li>
            <li>지적 겸손함을 유지하기 위해 노력합니다.</li>
            <li>커뮤니케이션은 적은 것보다는 많은게 좋다고 믿습니다.</li>
          </ul>
        </div>

        <div class="other">
          <h3>
            Data Analysis<span class="period-mark">.</span>
          </h3>
          <ul>
            <li>1</li>
          </ul>
          <h3>
            ML & DL<span class="period-mark">.</span>
          </h3>
          <ul>
            <li>1</li>
          </ul>
          <h3>
            Tableau<span class="period-mark">.</span>
          </h3>
          <ul>
            <li>1</li>
          </ul>
          <h3>
            IT Infra<span class="period-mark">.</span>
          </h3>
          <ul>
            <li>1</li>
          </ul>
          <h3>
            React<span class="period-mark">.</span>
          </h3>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      </section>
      <section>
        <h2>
          Contact<span class="period-mark">.</span>
        </h2>
        <ul>
          <li>
            깃허브:
            <a href="https://github.com/junyoungnnn" target="_blank">
              {" "}
              https://github.com/junyoungnnn
            </a>
          </li>
          <li>
            블로그:
            <a href="https://velog.io/@junyoung0123/posts" target="_blank">
              {" "}
              https://velog.io/@junyoung0123/posts
            </a>
          </li>
          <li>
            이전 블로그:
            <a href="https://blog.naver.com/njy3006" target="_blank">
              {" "}
              https://blog.naver.com/njy3006
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
