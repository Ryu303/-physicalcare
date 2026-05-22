const manualData = [
  {
    "symptom": "허리를 숙이거나 젖힐 때, 또는 기립 시 허리가 끊어질 듯 아프고 골반이 틀어진 느낌",
    "image_url": "assets/images/lumbar.png",
    "clinical_insight": "💡 임상 메커니즘: 장요근 단축이 골반 전방경사를 만들면, 요방형근(QL)이 과부하를 받아 척추 측만을 유발하는 하행성 연쇄의 전형입니다. 대둔근의 약화를 반드시 동반합니다.",
    "assessment": {
      "mrt": "MRT (2-2-2 Rule): 고관절 굴곡/신전 시 2초 등척성 수축-2초 유지-2초 이완을 적용하여 통증 유발 및 신경계 스위칭 결함 확인",
      "mmt_details": [
        {
          "muscle": "요방형근 (Quadratus Lumborum)",
          "position": "1. 자세: Supine 자세에서 검사하는 쪽으로 양쪽 다리를 끌어다 놓는다.",
          "fixation": "2. 고정: 피검사자가 검사대의 양 옆을 손으로 붙잡도록 한다.",
          "test": "3. 검사: 검사자는 발목 부위에 접촉하여 양쪽 발목을 가운데로 잡아당기며 저항을 준다."
        },
        {
          "muscle": "대둔근 (Gluteus Maximus)",
          "position": "1. 자세: Prone 자세에서 고관절 신전 + 슬관절 굴곡을 유지한다.",
          "fixation": "2. 고정: 반대쪽 골반을 강하게 고정한다.",
          "test": "3. 검사: 한 손을 대퇴부 후면에 접촉하여 하방으로 저항을 준다."
        }
      ]
    },
    "involved_muscles": [
      {
        "name": "요방형근 (Quadratus Lumborum)",
        "origin": "Post. iliac crest, iliolumbar ligament",
        "insertion": "12th rib, transverse process of L1~L4",
        "action": "Lateral flexion, extension (vertebral column)",
        "type": "Tonic (이완 대상)"
      },
      {
        "name": "대둔근 (Gluteus Maximus)",
        "origin": "Posterior surface of ilium, sacrum, coccyx",
        "insertion": "Gluteal tuberosity of femur, Iliotibial tract",
        "action": "Extension, External rotation (hip)",
        "type": "Phasic (강화 대상)"
      }
    ],
    "manual_technique": {
      "met": "MET (PIR/RI): 대상 근육을 텐션이 느껴지는 지점까지 늘린 후, 환자에게 20%의 힘으로 주동근 수축(PIR) 또는 길항근 수축(RI)을 5~7초간 유도하고 이완 사이클을 반복한다.",
      "prt": "PRT (Positional Release): QL 압통점 압박 후 환자의 골반을 수동으로 들어올려 가장 편안한(Slacked) 자세를 찾아 90초간 유지한다."
    },
    "red_flag": "하지로 뻗치는 찌릿한 방사통, 감각 소실, 발가락 근력 약화 동반 시 즉시 중재를 중단하고 병원 의뢰 (추간판 신경근 압박 위험).",
    "category": "🦴 체형 및 관절 기초 통증"
  },
  {
    "symptom": "걸을 때 무릎 바깥쪽이 아프거나 엉덩이 측면이 시큰거리고 짝다리를 짚게 됨",
    "image_url": "assets/images/leg.png",
    "clinical_insight": "💡 임상 메커니즘: 중둔근 약화 시 보행 중 골반이 옆으로 빠지며, 이를 막기 위해 TFL이 비정상적으로 과활성화되어 장경인대(ITB) 마찰 증후군을 유발합니다.",
    "assessment": {
      "mrt": "MRT (2-2-2 Rule): 고관절 외전 시 근수축 2초-유지 2초-이완 2초 중 약화나 떨림 현상이 있는지 확인하여 Phasic 억제 여부 판단",
      "mmt_details": [
        {
          "muscle": "중둔근 (Gluteus Medius)",
          "position": "1. 자세: Supine(또는 측와위) 자세에서 고관절을 외전시킨다.",
          "fixation": "2. 고정: 반대쪽 다리의 발목(또는 골반)을 확실히 고정한다.",
          "test": "3. 검사: 발목의 근위부에 접촉하여 내전 방향으로 저항을 준다."
        },
        {
          "muscle": "대퇴근막장근 (Tensor Fascia Lata)",
          "position": "1. 자세: Supine 자세에서 고관절 굴곡(20도) + 외전 + 내회전 + 슬관절 신전 자세를 취한다.",
          "fixation": "2. 고정: 반대편 골반이나 발목을 고정한다.",
          "test": "3. 검사: 발목의 근위부에 접촉하여 내전+신전 방향으로 저항을 준다 (반대쪽 다리를 향하여)."
        },
        {
          "muscle": "이상근 (Piriformis)",
          "position": "1. 자세: Prone 자세에서 슬관절 90도 굴곡 + 고관절 외회전시킨다.",
          "fixation": "2. 고정: 검사하는 쪽의 슬관절을 고정한다.",
          "test": "3. 검사: 발목 내측에 접촉하여 내회전 방향으로 저항을 준다."
        }
      ]
    },
    "involved_muscles": [
      {
        "name": "중둔근 (Gluteus Medius)",
        "origin": "Outer surface of ilium",
        "insertion": "Greater trochanter",
        "action": "Abduction, Flexion/Extension, Internal/External rotation",
        "type": "Phasic (강화 대상)"
      },
      {
        "name": "대퇴근막장근 (TFL)",
        "origin": "Ant. iliac crest (ASIS)",
        "insertion": "Greater trochanter ~ iliotibial tract",
        "action": "Flexion, Abduction, Internal rotation",
        "type": "Tonic (이완 대상)"
      },
      {
        "name": "이상근 (Piriformis)",
        "origin": "Internal surface of sacrum",
        "insertion": "Greater trochanter of femur",
        "action": "External rotation, Abduction (hip)",
        "type": "Tonic (이완 대상)"
      }
    ],
    "manual_technique": {
      "met": "TFL PIR: 다리를 신전/내전 방향으로 늘린 후, 환자가 20%의 힘으로 외전/굴곡(위로 드는 힘)을 5~7초 유지하게 한 뒤 10초 이완한다.",
      "prt": "이상근 및 TFL 트리거포인트 촉진 후 고관절을 외전/굴곡 시켜 근육이 가장 느슨해지는 각도에서 90초간 지그시 유지한다."
    },
    "red_flag": "무릎 관절 자체에 열감이나 부종이 있거나, 보행 자체가 불가능할 정도의 체중 지지 실패 시 관절강 내 구조적 손상 의심.",
    "category": "🦴 체형 및 관절 기초 통증"
  },
  {
    "symptom": "어깨를 들거나 돌릴 때 앞쪽이 찝히고 등 뒤로 손이 잘 안 넘어감 (라운드숄더)",
    "image_url": "assets/images/shoulder.png",
    "clinical_insight": "💡 임상 메커니즘: 소흉근 단축은 견갑골을 앞/아래로 기울게(Anterior tilt) 만들어, 팔을 올릴 때 견봉하 공간을 좁혀 극상근 건을 물리적으로 찝히게 합니다.",
    "assessment": {
      "mrt": "MRT (2-2-2 Rule): 견관절 내회전/외회전 시 2초 수축-유지-이완을 통해 회전근개 및 대흉근/소흉근의 비정상적 근긴장도 파악",
      "mmt_details": [
        {
          "muscle": "소흉근 (Pectoralis Minor)",
          "position": "1. 자세: 주관절 신전, 견관절 90도 굴곡 + 최대한 내회전 + 수평내전 (이때 어깨가 올라가지 않게).",
          "fixation": "2. 고정: 반대쪽 어깨를 고정한다.",
          "test": "3. 검사: 손가락을 편 상태에서 피검사자의 손목에 접촉하여 외하방(45도) 방향으로 저항을 준다."
        },
        {
          "muscle": "전거근 (Serratus Anterior)",
          "position": "1. 자세: Supine 상태에서 견갑대의 Protraction 동작을 유지시킨다.",
          "fixation": "2. 고정: 없음. 검사자의 반대 손은 견갑 내측연(Medial border)을 촉진한다.",
          "test": "3. 검사: 한 손으로 아래 방향(검사대)으로 저항하며 내측연이 밀려 내려오는지 확인한다."
        },
        {
          "muscle": "극상근 (Supraspinatus)",
          "position": "1. 자세: 서거나 앉은 자세에서 견관절 외전(15도) + 굴곡(30도) (손바닥이 서혜부 방향).",
          "fixation": "2. 고정: 반대쪽 견관절을 고정한다.",
          "test": "3. 검사: 손목 근위부에 접촉하여 서혜부 방향으로 하방 저항을 준다."
        }
      ]
    },
    "involved_muscles": [
      {
        "name": "소흉근 (Pectoralis Minor)",
        "origin": "Outer surfaces of ribs 3~5",
        "insertion": "Coracoid process of scapula",
        "action": "Protraction, Depression, Downward rotation, Anterior tilt",
        "type": "Tonic (이완 대상)"
      },
      {
        "name": "전거근 (Serratus Anterior)",
        "origin": "Outer surfaces ribs 1~8 or 9",
        "insertion": "Medial border and inferior angle of scapula",
        "action": "Upward rotation, Protraction",
        "type": "Phasic (강화 대상)"
      },
      {
        "name": "극상근 (Supraspinatus)",
        "origin": "Supraspinous fossa of scapula",
        "insertion": "Greater tubercle of humerus",
        "action": "Abduction (humerus)",
        "type": "Tonic/Phasic 혼합"
      }
    ],
    "manual_technique": {
      "met": "소흉근 RI: 환자에게 견갑골 후인(Retraction) 방향으로 능동 수축(5~7초)을 유도하여 소흉근의 상호억제 이완을 유도한다.",
      "prt": "소흉근 오훼돌기 부착부 핀칭 후 어깨를 전방으로 살짝 둥글게 말아 가장 통증이 없는 Slacked position을 90초간 유지한다."
    },
    "red_flag": "야간 통증이 심하여 잠을 깨거나, 팔을 들어올린 후 천천히 내리지 못하고 툭 떨어지는 경우 회전근개 파열 의심.",
    "category": "🦴 체형 및 관절 기초 통증"
  },
  {
    "symptom": "목을 젖히거나 돌릴 때 뒷목이 뻣뻣하고 두통이 동반되며 어깨 위가 항상 무거움",
    "image_url": "assets/images/neck.png",
    "clinical_insight": "💡 임상 메커니즘: 거북목(FHP) 자세는 후두하근과 상부승모근을 만성적으로 단축시키며, 이는 대후두신경을 압박하여 경추성 두통과 안구 통증을 유발할 수 있습니다.",
    "assessment": {
      "mrt": "MRT (2-2-2 Rule): 경추 측굴 시 2초 저항-유지-이완을 통해 목갈비근(사각근)과 견갑거근의 스파즘(Spasm) 여부 확인",
      "mmt_details": [
        {
          "muscle": "상부승모근 (Upper Trapezius)",
          "position": "1. 자세: 검사하는 쪽의 어깨를 올리며 동시에 귀를 어깨 쪽으로 가져간다. (고개는 반대로 약간 회전).",
          "fixation": "2. 고정: 없음.",
          "test": "3. 검사: 양손을 이용하여 어깨와 머리를 서로 반대 방향으로 저항을 준다."
        },
        {
          "muscle": "견갑거근 (Levator Scapulae)",
          "position": "1. 자세: 주관절 90도 굴곡 + 어깨 내전. 목은 검사 방향으로 측굴시킨다.",
          "fixation": "2. 고정: 검사하는 쪽 어깨를 고정한다.",
          "test": "3. 검사: 주관절 내측에 접촉하여 견관절 외전 방향으로 잡아당긴다. (어깨 하강 강조)"
        },
        {
          "muscle": "흉쇄유돌근 (SCM)",
          "position": "1. 자세: Supine에서 검사 반대쪽으로 고개를 회전 + 굴곡시킨다.",
          "fixation": "2. 고정: 없음.",
          "test": "3. 검사: 측두골에 접촉하여 아래쪽 사선 방향으로 저항을 준다."
        }
      ]
    },
    "involved_muscles": [
      {
        "name": "상부승모근 (Upper Trapezius)",
        "origin": "Occipital bone, nuchae ligament, C7~T12",
        "insertion": "Lateral 1/3 clavicle, acromion process",
        "action": "Elevation, Upward rotation",
        "type": "Tonic (이완 대상)"
      },
      {
        "name": "견갑거근 (Levator Scapulae)",
        "origin": "Transverse processes of C1~C4",
        "insertion": "Upper medial border of scapula",
        "action": "Elevation, Downward rotation",
        "type": "Tonic (이완 대상)"
      },
      {
        "name": "흉쇄유돌근 (SCM)",
        "origin": "Upper sternum, Medial 1/3 clavicle",
        "insertion": "Mastoid process of temporal bone",
        "action": "Lateral flexion, Contralateral rotation",
        "type": "Tonic (이완 대상)"
      }
    ],
    "manual_technique": {
      "met": "견갑거근/SCM PIR: 해당 근육을 이완 범위 끝까지 스트레칭 후, 환자가 원래 방향으로 20% 힘을 주고 5~7초간 버티게 한 뒤 이완한다.",
      "prt": "후두하근(Suboccipitalis) 및 경추 부착부 촉진 후 고개를 약간 신전시키고 치료사 쪽으로 체중을 실어 압박을 줄인 채 90초 유지한다."
    },
    "red_flag": "경추를 움직일 때 상지(손끝)까지 저릿한 감각이 강하게 퍼지거나 어지러움, 구토가 발생하면 신경/혈관 문제 의심.",
    "category": "🦴 체형 및 관절 기초 통증"
  },
  {
    "symptom": "발목이 자주 삐거나 쪼그려 앉을 때 발목 앞쪽이 막히고 종아리가 심하게 뭉침",
    "image_url": "assets/images/leg.png",
    "clinical_insight": "💡 임상 메커니즘: 비복근/가자미근 단축은 족배굴곡(발등 굽힘)을 제한하여, 쪼그려 앉거나 스쿼트 시 무게중심이 뒤로 쏠리거나 무릎에 과부하를 줍니다.",
    "assessment": {
      "mrt": "MRT (2-2-2 Rule): 족저/족배굴곡 등척성 수축을 통해 길항관계인 전경골근과 비복근의 억제/활성 불균형 평가",
      "mmt_details": [
        {
          "muscle": "전경골근 (Tibialis Anterior)",
          "position": "1. 자세: Supine 자세에서 고관절과 슬관절 신전 + 족관절 배측굴곡.",
          "fixation": "2. 고정: 발목 하퇴부(Tibia)를 단단히 고정한다.",
          "test": "3. 검사: 발등에 접촉하여 저측굴곡 방향으로 강하게 저항을 준다."
        },
        {
          "muscle": "비복근/가자미근 (Gastrocnemius/Soleus)",
          "position": "1. 자세: Prone 자세에서 슬관절 90도 굴곡(가자미근) 또는 완전 신전(비복근) + 족관절 저측굴곡.",
          "fixation": "2. 고정: 발목을 고정한다.",
          "test": "3. 검사: 한 손은 발뒤꿈치, 다른 손은 발바닥에 접촉하여 배측굴곡 방향으로 꺾어 누르며 저항을 준다."
        },
        {
          "muscle": "후경골근 (Tibialis Posterior)",
          "position": "1. 자세: Supine 자세에서 족관절 저측굴곡 + 내번(Inversion).",
          "fixation": "2. 고정: 발목을 고정한다.",
          "test": "3. 검사: 발의 내측에 접촉하여 배측굴곡 + 외번 방향으로 저항을 준다."
        }
      ]
    },
    "involved_muscles": [
      {
        "name": "전경골근 (Tibialis Anterior)",
        "origin": "Lateral condyle of tibia, interosseous membrane",
        "insertion": "1st cuneiform, 1st metatarsal",
        "action": "Dorsiflexion, Inversion",
        "type": "Phasic (강화 대상)"
      },
      {
        "name": "비복근 (Gastrocnemius)",
        "origin": "Medial and lateral condyle of femur",
        "insertion": "Posterior surface of calcaneus",
        "action": "Flexion (knee), Plantar flexion",
        "type": "Tonic (이완 대상)"
      },
      {
        "name": "후경골근 (Tibialis Posterior)",
        "origin": "Posterior surface of tibia and fibula",
        "insertion": "2~4 metatarsal",
        "action": "Plantar flexion, Inversion",
        "type": "Tonic (이완 대상)"
      }
    ],
    "manual_technique": {
      "met": "비복근 PIR: 배측굴곡(Dorsiflexion) 저항점까지 올린 뒤, 환자가 20%의 힘으로 페달을 밟듯 5~7초 수축하게 하고 10초간 늘려준다.",
      "prt": "종아리 심부 근복(가자미근/후경골근 부위) 압박 후 무릎을 굽히고 발목을 저측굴곡하여 가장 부드러워지는 자세로 90초 유지한다."
    },
    "red_flag": "외상 병력이 있거나 특정 인대 부위에 극심한 압통/피멍 동반 시 인대 파열 및 골절이 의심되므로 조작 금지.",
    "category": "🦴 체형 및 관절 기초 통증"
  },
  {
    "symptom": "양반다리가 안 되고 사타구니 안쪽이 항상 당기며 뻐근해요",
    "image_url": "assets/images/leg.png",
    "clinical_insight": "💡 임상 메커니즘: 내전근의 과긴장은 고관절 외전을 물리적으로 막으며, 보행 시 골반의 수평 밸런스를 깨뜨려 무릎 내측과 허리에 스트레스를 전달합니다.",
    "assessment": {
      "mrt": "MRT (2-2-2 Rule): 고관절 외전 시 2초간 내전근의 신장성 통증 및 저항감(Spasm) 양상 파악",
      "mmt_details": [
        {
          "muscle": "장/단내전근 (Adductor Longus/Brevis)",
          "position": "1. 자세: 측와위에서 위쪽 다리를 외전/신전하여 지지하고 아래쪽 다리를 거상한다.",
          "fixation": "2. 고정: 골반이 틀어지지 않게 상단에서 골반을 고정한다.",
          "test": "3. 검사: 아래쪽 다리 대퇴부 내측에 하방 저항을 주어 버티게 한다."
        },
        {
          "muscle": "대내전근 (Adductor Magnus)",
          "position": "1. 자세: Supine 자세에서 고관절 내전 + 슬관절 신전 + 외회전.",
          "fixation": "2. 고정: 반대쪽 다리의 발목을 고정한다.",
          "test": "3. 검사: 발목을 외전 방향으로 저항을 준다."
        }
      ]
    },
    "involved_muscles": [
      {
        "name": "장/단내전근 (Adductor Longus/Brevis)",
        "origin": "Anterior surface/Ramus of pubis",
        "insertion": "Linea aspera of femur",
        "action": "Adduction, Flexion, Lateral rotation (hip)",
        "type": "Tonic/Phasic 혼합"
      },
      {
        "name": "대내전근 (Adductor Magnus)",
        "origin": "Ramus of pubis, Ischial tuberosity",
        "insertion": "Linea aspera of femur",
        "action": "Adduction, Lateral rotation (hip)",
        "type": "Tonic (이완 대상)"
      }
    ],
    "manual_technique": {
      "met": "내전근 PIR: Supine에서 나비자세(FABER 유사)를 취한 뒤, 환자가 무릎을 오므리는 힘(20%)에 대해 치료사가 버티며 7초 수축 후 바닥으로 이완한다.",
      "prt": "내전근 기시부(치골 부근) 압통점 압박 후, 고관절을 내전/내회전 시켜 긴장을 풀고 90초 유지한다."
    },
    "red_flag": "심한 서혜부 통증 동반 시 고관절 와순 파열(Labral tear)이나 대퇴골두 무혈성 괴사 가능성을 배제해야 함.",
    "category": "🦴 체형 및 관절 기초 통증"
  },
  {
    "symptom": "등 가운데(날개뼈 사이)가 항상 뻐근하고 굽은 등(Round Back)을 지적받아요",
    "image_url": "assets/images/lumbar.png",
    "clinical_insight": "💡 임상 메커니즘: 대흉근의 강한 앞쪽 당김이 길항근인 능형근/중부승모근을 강제로 늘어뜨려(이완성 약화) 발생하는 전형적인 상위교차증후군(Upper Crossed Syndrome)입니다.",
    "assessment": {
      "mrt": "MRT (2-2-2 Rule): 견갑골 후인(Retraction) 시 2-2-2 수축을 통해 능형근과 중부승모근의 Phasic 약화 파악",
      "mmt_details": [
        {
          "muscle": "중/하부승모근 (Mid/Lower Trapezius)",
          "position": "1. 자세: Prone 자세에서 외전(90/150도) + 외회전(손등/엄지가 위로).",
          "fixation": "2. 고정: 반대쪽 견갑대 혹은 장골을 고정한다.",
          "test": "3. 검사: 손목 근위부에 접촉하여 견관절 수평내전(바닥) 방향으로 저항을 준다."
        },
        {
          "muscle": "능형근 (Rhomboid)",
          "position": "1. 자세: 앉거나 선 자세에서 주관절 90도 굴곡 + 견갑골 내전 + 거상.",
          "fixation": "2. 고정: 검사하는 쪽의 어깨 전면을 고정한다.",
          "test": "3. 검사: 주관절에 접촉하여 외전방향(몸에서 멀어지게)으로 잡아 당긴다."
        },
        {
          "muscle": "대흉근 (Pectoralis Major)",
          "position": "1. 자세: 주관절 신전, 견관절 90도 굴곡 + 최대한 내회전 + 수평내전.",
          "fixation": "2. 고정: 반대쪽 어깨를 고정한다.",
          "test": "3. 검사: 피검사자의 손목에 접촉하여 외상방/외하방(45도) 방향으로 저항을 준다."
        }
      ]
    },
    "involved_muscles": [
      {
        "name": "능형근 (Rhomboid)",
        "origin": "Spinous process of C7~T5",
        "insertion": "Medial border of scapula",
        "action": "Retraction, Elevation, Downward rotation",
        "type": "Phasic (강화 대상)"
      },
      {
        "name": "중/하부승모근 (Mid/Low Trapezius)",
        "origin": "T1-T12 spinous process",
        "insertion": "Acromion, Scapula spine",
        "action": "Retraction, Depression, Upward rotation",
        "type": "Phasic (강화 대상)"
      },
      {
        "name": "대흉근 (Pectoralis Major)",
        "origin": "Clavicle, Sternum, Upper 6 ribs",
        "insertion": "Intertubercular groove of humerus",
        "action": "Adduction, Internal rotation, Horizontal adduction",
        "type": "Tonic (이완 대상)"
      }
    ],
    "manual_technique": {
      "met": "대흉근 PIR: 환자가 누운 상태에서 팔을 외전/신전 시키고, 환자는 안으로 모으려는 힘(20%)을 내고 치료사는 버티며 7초 후 스트레칭 범위를 늘린다.",
      "prt": "능형근 압통점 촉진 후, 팔을 반대쪽 어깨로 보내어(수평내전) 견갑골 사이를 늘린 뒤 흉추를 후만시켜 Slacked position을 찾는다."
    },
    "red_flag": "흉추 후만이 뼈 구조적으로 고착화(Structural Kyphosis)된 경우, 무리한 신전 교정은 척추 극돌기 골절 위험이 있습니다.",
    "category": "🦴 체형 및 관절 기초 통증"
  },
  {
    "symptom": "팔을 머리 뒤로 넘기기 힘들고 겨드랑이 뒤쪽과 등 아래가 타이트해요",
    "image_url": "assets/images/shoulder.png",
    "clinical_insight": "💡 임상 메커니즘: 광배근은 골반에서 팔까지 이어지는 거대한 근육이므로, 단축 시 팔을 올리면 이를 보상하기 위해 요추가 앞으로 심하게 꺾이는(요추 전만) 현상이 발생합니다.",
    "assessment": {
      "mrt": "MRT (2-2-2 Rule): 견관절 최대 굴곡 시 광배근의 신장성 통증 및 보상적인 요추 전만 발생 관찰",
      "mmt_details": [
        {
          "muscle": "광배근 (Latissimus Dorsi)",
          "position": "1. 자세: Prone 자세에서 검사하고자 하는 방향으로 목을 회전 + 허리 신전.",
          "fixation": "2. 고정: 반대측 골반 혹은 견관절을 고정한다.",
          "test": "3. 검사: 팔목 혹은 측두골에 접촉하여 굴곡 및 외전 방향으로 저항을 준다."
        },
        {
          "muscle": "대원근 (Teres Major)",
          "position": "1. 자세: 서거나 누운 자세에서 주관절 신전 + 견관절 내전 + 내회전.",
          "fixation": "2. 고정: 검사하는 쪽 견관절을 고정한다.",
          "test": "3. 검사: 외전과 약간의 굴곡 방향으로 저항을 준다."
        }
      ]
    },
    "involved_muscles": [
      {
        "name": "광배근 (Latissimus Dorsi)",
        "origin": "Thoracolumbar fascia, Iliac crest, Lower 3-4 ribs",
        "insertion": "Intertubercular groove of humerus",
        "action": "Extension, Adduction, Internal rotation (humerus)",
        "type": "Tonic (이완 대상)"
      },
      {
        "name": "대원근 (Teres Major)",
        "origin": "Inferior angle of scapula",
        "insertion": "Intertubercular groove of humerus",
        "action": "Extension, Adduction, Internal rotation (humerus)",
        "type": "Tonic (이완 대상)"
      }
    ],
    "manual_technique": {
      "met": "광배근 PIR: 환자가 옆으로 누워 팔을 귀 위로 뻗게 한 뒤, 팔을 골반 쪽으로 끌어내리려는 힘(20%)에 저항하며 7초 후 10초간 신전한다.",
      "prt": "견갑골 하각 주변 광배근/대원근 부착부 핀칭 후, 견관절을 내전/내회전 시켜 텐션을 풀고 90초 유지한다."
    },
    "red_flag": "팔을 올릴 때 겨드랑이 당김보다 견봉하 충돌 통증이 강하게 선행된다면, 광배근 단축보다는 회전근개 손상을 먼저 평가해야 합니다.",
    "category": "🦴 체형 및 관절 기초 통증"
  },
  {
    "symptom": "열중쉬어 자세를 하거나 팔을 바깥으로 돌릴 때 어깨 깊숙이 아프고 힘이 빠져요",
    "image_url": "assets/images/shoulder.png",
    "clinical_insight": "💡 임상 메커니즘: 견갑하근(내회전근)의 고질적 단축은 외회전근(극하근/소원근)을 상호억제시켜, 팔을 들어올리거나 돌릴 때 상완골두를 관절와에 고정하지 못해 충돌을 유발합니다.",
    "assessment": {
      "mrt": "MRT (2-2-2 Rule): 견관절 내/외회전 저항 시 2-2-2 수축을 통해 회전근개 건의 파열 또는 건염 유발 통증 파악",
      "mmt_details": [
        {
          "muscle": "소원근/극하근 (Teres Minor/Infraspinatus)",
          "position": "1. 자세: 주관절 90도 굴곡 후 몸에 붙이거나(소원근), 견관절 90도 외전(극하근) 상태에서 외회전 시킨다.",
          "fixation": "2. 고정: 검사하는 쪽의 주관절을 고정한다.",
          "test": "3. 검사: 손목 근위부에 접촉하여 견관절 내회전 방향으로 저항을 준다."
        },
        {
          "muscle": "견갑하근 (Subscapularis)",
          "position": "1. 자세: 견관절 90도 외전 + 주관절 90도 굴곡 + 내회전.",
          "fixation": "2. 고정: 검사하는 쪽의 주관절을 고정한다.",
          "test": "3. 검사: 손목 근위부에 접촉하여 외회전 방향으로 저항을 준다."
        }
      ]
    },
    "involved_muscles": [
      {
        "name": "극하근/소원근 (Infraspinatus/Teres Minor)",
        "origin": "Infraspinous fossa / Lateral border of scapula",
        "insertion": "Greater tubercle of humerus",
        "action": "External rotation (humerus)",
        "type": "Phasic (강화 대상)"
      },
      {
        "name": "견갑하근 (Subscapularis)",
        "origin": "Subscapular fossa of scapula",
        "insertion": "Lesser tubercle of humerus",
        "action": "Internal rotation (humerus)",
        "type": "Tonic (이완 대상)"
      }
    ],
    "manual_technique": {
      "met": "견갑하근 PIR: 환자가 누운 상태에서 팔을 외회전 끝범위로 가져간 뒤, 안으로 회전하려는 힘(내회전 20%)에 저항하며 7초 후 외회전 범위를 늘린다.",
      "prt": "극하근 압통점 촉진 후, 팔을 외회전시키고 어깨를 살짝 굴곡시켜 근복이 가장 부드러워지는 지점에서 90초 유지한다."
    },
    "red_flag": "저항 검사 시 통증을 넘어 아예 버티지 못하고 무너지는 경우(근력 2/5 이하) 회전근개 전층 파열이 의심되므로 수술적 처치 필요성 검토.",
    "category": "🦴 체형 및 관절 기초 통증"
  },
  {
    "symptom": "허리를 굽힐 때 허벅지 뒤쪽이 심하게 당기고 오금(무릎 뒤)이 아파요",
    "image_url": "assets/images/leg.png",
    "clinical_insight": "💡 임상 메커니즘: 햄스트링이 뻣뻣하면 허리를 숙일 때 골반이 정상적으로 앞으로 회전하지 못해, 요추가 억지로 꺾이면서 허리 디스크의 후방 압력을 치솟게 합니다.",
    "assessment": {
      "mrt": "MRT (2-2-2 Rule): 슬관절 굴곡 등척성 수축 시 햄스트링의 쥐내림(Cramp) 발생 여부 관찰",
      "mmt_details": [
        {
          "muscle": "햄스트링 (Hamstrings: Biceps femoris, Semi-m, Semi-t)",
          "position": "1. 자세: Prone 자세에서 슬관절 60도 이상 굴곡시킨다.",
          "fixation": "2. 고정: 골반이나 슬관절 위쪽을 대퇴부에서 고정한다.",
          "test": "3. 검사: 발목의 근위부에 접촉하여 슬관절 신전 방향으로 저항을 준다."
        },
        {
          "muscle": "슬와근 (Popliteus)",
          "position": "1. 자세: Prone 자세에서 발목을 저측굴곡 시킨다.",
          "fixation": "2. 고정: 한 손은 발목을 고정한다.",
          "test": "3. 검사: 발바닥에 접촉하여 배측굴곡 방향으로 저항을 준다."
        }
      ]
    },
    "involved_muscles": [
      {
        "name": "햄스트링 (Hamstrings)",
        "origin": "Ischial tuberosity",
        "insertion": "Head of fibula, Medial condyle of tibia",
        "action": "Extension (hip), Flexion (knee)",
        "type": "Tonic (이완 대상)"
      },
      {
        "name": "슬와근 (Popliteus)",
        "origin": "Lateral condyle of femur",
        "insertion": "Posterior surface of tibia",
        "action": "Flexion, Internal rotation (knee)",
        "type": "Tonic (이완 대상)"
      }
    ],
    "manual_technique": {
      "met": "햄스트링 PIR: 앙와위에서 다리를 뻗은 채 들어올려(SLR) 텐션을 느낀 뒤, 다리를 바닥으로 내리려는 힘(20%)에 저항하며 7초 수축 후 이완한다.",
      "prt": "무릎 후면 슬와근 건 부착부 핀칭 후 무릎을 90도 굴곡하고 내회전 시켜 압통이 사라지는 각도에서 90초 유지한다."
    },
    "red_flag": "SLR(하지직거상) 테스트 중 30-40도에서 전기가 오는 듯한 찌릿함 발생 시, 단순 근육 단축이 아닌 요추 디스크 신경근 압박 징후입니다.",
    "category": "🦴 체형 및 관절 기초 통증"
  },
  {
    "symptom": "무거운 물건을 들거나 팔꿈치를 구부렸다 펼 때 팔꿈치 주변이 아프고 힘이 빠져요",
    "image_url": "assets/images/shoulder.png",
    "clinical_insight": "💡 임상 메커니즘: 상완이두근(Tonic)과 삼두근(Phasic)의 근력 불균형은 주관절의 미세한 축 틀어짐을 유발하여, 움직일 때마다 건(Tendon)에 부자연스러운 마찰과 염증을 일으킵니다.",
    "assessment": {
      "mrt": "MRT (2-2-2 Rule): 주관절 굴곡/신전 시 2초간 버티게 하여 상완이두근 건염 및 삼두근 약화 판별",
      "mmt_details": [
        {
          "muscle": "상완이두근 (Biceps Brachii)",
          "position": "1. 자세: Supine 자세에서 주관절 90도 굴곡 + 손바닥이 견관절을 향하도록 회외(Supination).",
          "fixation": "2. 고정: 주관절의 후면을 바닥/테이블에 고정한다.",
          "test": "3. 검사: 손목 부위에 접촉하여 주관절 신전 방향으로 저항을 준다."
        },
        {
          "muscle": "상완삼두근 (Triceps Brachii)",
          "position": "1. 자세: Supine 자세에서 주관절 약간 굴곡 + 손바닥이 위로 향하게 한다.",
          "fixation": "2. 고정: 주관절의 후면을 고정한다.",
          "test": "3. 검사: 손목 근위부에 접촉하여 주관절 굴곡 방향으로 저항을 준다."
        },
        {
          "muscle": "완요골근 (Brachioradialis)",
          "position": "1. 자세: Supine 자세에서 주관절 90도 굴곡 + 엄지가 견관절을 향하게(Mid-prone) 한다.",
          "fixation": "2. 고정: 주관절의 후면을 고정한다.",
          "test": "3. 검사: 손목 부위에 접촉하여 주관절 신전 방향으로 저항을 준다."
        }
      ]
    },
    "involved_muscles": [
      {
        "name": "상완이두근 (Biceps Brachii)",
        "origin": "Supraglenoid tubercle, Coracoid process",
        "insertion": "Radial tuberosity",
        "action": "Elbow flexion, Supinates forearm",
        "type": "Tonic (이완 대상)"
      },
      {
        "name": "상완삼두근 (Triceps Brachii)",
        "origin": "Infraglenoid tubercle, Posterior humerus",
        "insertion": "Olecranon process of ulna",
        "action": "Extension (elbow, humerus)",
        "type": "Phasic (강화 대상)"
      },
      {
        "name": "완요골근 (Brachioradialis)",
        "origin": "Lateral supracondylar ridge of humerus",
        "insertion": "Styloid process of radius",
        "action": "Flexion (elbow)",
        "type": "Tonic (이완 대상)"
      }
    ],
    "manual_technique": {
      "met": "상완이두근 PIR: 팔꿈치를 끝까지 편 상태에서 환자가 구부리려는 힘(20%)에 저항하며 7초 유지 후, 팔꿈치와 어깨를 신전/회내 시켜 이완한다.",
      "prt": "상완이두근 장두/단두 부착부(결절간구 부근) 핀칭 후 어깨와 팔꿈치를 굽혀 이완된 각도에서 90초 유지한다."
    },
    "red_flag": "외상과염(테니스엘보) 또는 내상과염(골프엘보) 병력이 뚜렷할 경우 무리한 근력 검사는 건의 미세파열을 가중시키므로 주의합니다.",
    "category": "🦴 체형 및 관절 기초 통증"
  },
  {
    "symptom": "팔을 앞이나 옆으로 들어 올릴 때 어깨 겉면 근육이 무겁고 힘이 안 들어가요",
    "image_url": "assets/images/shoulder.png",
    "clinical_insight": "💡 임상 메커니즘: 삼각근은 회전근개가 뼈를 관절에 꽉 잡아준 상태에서 겉의 거친 움직임을 만들어야 합니다. 속근육(회전근개)이 약하면 삼각근 혼자 뼈를 들어올리다 주변 연부조직과 마찰을 일으킵니다.",
    "assessment": {
      "mrt": "MRT (2-2-2 Rule): 견관절 굴곡/외전/신전 시 2초간 등척성 수축을 통해 삼각근 섬유별(전/중/후) 활성화 패턴 확인",
      "mmt_details": [
        {
          "muscle": "전삼각근 (Anterior Deltoid)",
          "position": "1. 자세: 앉거나 선 자세에서 견관절을 90도 굴곡시킨다.",
          "fixation": "2. 고정: 반대쪽 어깨나 흉곽을 고정한다.",
          "test": "3. 검사: 팔목 근위부에 접촉하여 하방(신전) 방향으로 저항을 준다."
        },
        {
          "muscle": "중삼각근 (Middle Deltoid)",
          "position": "1. 자세: 앉거나 선 자세에서 견관절을 90도 외전시킨다.",
          "fixation": "2. 고정: 반대쪽 어깨를 고정한다.",
          "test": "3. 검사: 팔목 근위부에 접촉하여 내전(하방) 방향으로 저항을 준다."
        },
        {
          "muscle": "후삼각근 (Posterior Deltoid)",
          "position": "1. 자세: Prone 또는 앉은 자세에서 견관절 90도 외전 후 약간 신전시킨다.",
          "fixation": "2. 고정: 검사하는 쪽의 견갑골/어깨를 고정한다.",
          "test": "3. 검사: 팔목 근위부에 접촉하여 전방(굴곡) 방향으로 저항을 준다."
        }
      ]
    },
    "involved_muscles": [
      {
        "name": "전삼각근 (Anterior Deltoid)",
        "origin": "Clavicle (lateral 1/3)",
        "insertion": "Deltoid tuberosity of humerus",
        "action": "Flexion, Internal rotation",
        "type": "Phasic (강화 대상)"
      },
      {
        "name": "중/후삼각근 (Mid/Post Deltoid)",
        "origin": "Acromion, Spine of scapula",
        "insertion": "Deltoid tuberosity of humerus",
        "action": "Abduction, Extension, External rotation",
        "type": "Phasic (강화 대상)"
      }
    ],
    "manual_technique": {
      "met": "삼각근 활성화 기법: 각 삼각근의 약화된 방향으로 저항을 주며 환자가 20%의 힘으로 밀어내게 하는 등척성 수축을 유도한다.",
      "prt": "삼각근 정지부(상완골 외측) 압박 후 어깨를 외전 및 굴곡 시켜 근육이 가장 느슨해지는 각도에서 90초간 유지한다."
    },
    "red_flag": "단순 근육 약화가 아닌 어깨 관절 자체가 빠질 것 같은 불안정성(Instability)이나 탈구 병력이 동반될 경우 관절와순 파열 주의.",
    "category": "🦴 체형 및 관절 기초 통증"
  },
  {
    "symptom": "평발이 심해지는 것 같고, 서 있을 때 발목 바깥쪽과 발등이 자주 뻐근해요",
    "image_url": "assets/images/leg.png",
    "clinical_insight": "💡 임상 메커니즘: 장/단비골근이 약해지면 체중 부하 시 발목을 바깥으로 단단히 받쳐주지 못해 발아치가 무너지고(과회내), 이는 결과적으로 무릎이 안으로 무너지는(Valgus) 연쇄 반응을 일으킵니다.",
    "assessment": {
      "mrt": "MRT (2-2-2 Rule): 발목 외번(Eversion) 상태에서 2초간 저항을 주어 장/단비골근의 약화 및 밸런스 붕괴 확인",
      "mmt_details": [
        {
          "muscle": "장/단비골근 (Peroneus Longus/Brevis)",
          "position": "1. 자세: Supine 자세에서 족관절 저측굴곡 + 외번(Eversion) 시킨다.",
          "fixation": "2. 고정: 발목을 고정한다.",
          "test": "3. 검사: 발의 외측에 접촉하여 배측굴곡 + 내번 방향으로 저항을 준다."
        },
        {
          "muscle": "제3비골근 (Peroneus Tertius)",
          "position": "1. 자세: Supine 자세에서 족관절 배측굴곡 + 외번(Eversion) 시킨다.",
          "fixation": "2. 고정: 발목의 내측부분을 고정시킨다.",
          "test": "3. 검사: 발목의 외측에 접촉하여 내번 방향으로 저항을 준다."
        }
      ]
    },
    "involved_muscles": [
      {
        "name": "장/단비골근 (Peroneus Longus/Brevis)",
        "origin": "Lateral surface of fibula",
        "insertion": "Cuneiform, 1st & 5th metatarsal",
        "action": "Plantar flexion, Eversion (ankle)",
        "type": "Phasic (강화 대상)"
      },
      {
        "name": "제3비골근 (Peroneus Tertius)",
        "origin": "Anterior of fibula (distal)",
        "insertion": "5th metatarsal",
        "action": "Dorsiflexion, Eversion (ankle)",
        "type": "Phasic (강화 대상)"
      }
    ],
    "manual_technique": {
      "met": "비골근 활성화: 발목을 내번(Inversion) 시킨 후, 환자에게 외번(바깥쪽으로 돌림) 방향으로 20% 저항을 내게 하여 7초간 수축시킨다.",
      "prt": "비골두(Fibular head) 하단 근복을 압박한 상태로 발목을 외번 시켜 텐션이 사라지는 각도를 찾아 90초 유지한다."
    },
    "red_flag": "발목을 심하게 접지른 이력이 있고 복숭아뼈 전하방에 지속적인 부종과 극심한 압통이 있다면 전거비인대(ATFL) 파열을 의심합니다.",
    "category": "🦴 체형 및 관절 기초 통증"
  },
  {
    "symptom": "숨을 깊게 들이마실 때 목 앞쪽과 쇄골 주변이 답답하고 두통이 있어요",
    "image_url": "assets/images/neck.png",
    "clinical_insight": "💡 임상 메커니즘: 횡격막 호흡 기능을 상실하면 사각근과 흉쇄유돌근을 이용한 강박적인 '흉식호흡'을 하게 되며, 이는 목 주변 근막을 하루 2만 번 이상 수축시켜 돌덩이처럼 굳게 만듭니다.",
    "assessment": {
      "mrt": "MRT (2-2-2 Rule): 흉식 호흡(Inhalation)을 유도하며 사각근의 비정상적 과수축 여부 및 흉곽 거상 관찰",
      "mmt_details": [
        {
          "muscle": "사각근 (Scalenes)",
          "position": "1. 자세: Supine 자세에서 목을 살짝 굴곡 및 반대쪽으로 회전시킨다.",
          "fixation": "2. 고정: 쇄골 주변 흉곽이 과도하게 들리지 않게 고정한다.",
          "test": "3. 검사: 측두골에 접촉하여 신전 방향으로 가볍게 저항을 준다."
        },
        {
          "muscle": "후두하근 (Suboccipitalis)",
          "position": "1. 자세: Prone 자세에서 턱을 당긴(Chin-in) 상태를 유지한다.",
          "fixation": "2. 고정: 후두골 하단 부위를 고정한다.",
          "test": "3. 검사: 목의 상부 굴곡(Chin-in)이 풀리도록 이마에서 뒤로 가볍게 저항을 준다."
        }
      ]
    },
    "involved_muscles": [
      {
        "name": "사각근 (Scalenes)",
        "origin": "Transverse process of C2~C7",
        "insertion": "1st and 2nd ribs",
        "action": "Lateral flexion, Contralateral rotation, Raises ribs",
        "type": "Tonic (이완 대상)"
      },
      {
        "name": "후두하근 (Suboccipitalis)",
        "origin": "C1, C2 (Atlas, Axis)",
        "insertion": "Occipital bone",
        "action": "Extension, Rotation of head",
        "type": "Tonic (이완 대상)"
      }
    ],
    "manual_technique": {
      "met": "사각근 PIR: 쇄골을 하방으로 고정한 뒤 목을 반대쪽으로 측굴/회전시켜 늘리고, 환자가 제자리로 돌아오려는 힘(10%)에 7초간 저항한다.",
      "prt": "두개골 하단(C1-C2 부위)을 손가락 끝으로 부드럽게 지지하고 고개를 살짝 신전시켜 근막의 이완을 유도하며 90초 유지한다."
    },
    "red_flag": "흉곽출구증후군(TOS) 동반 시, 사각근 사이로 지나가는 상완신경총이 압박되어 심한 상지 저림이 나타날 수 있으므로 무리한 스트레칭을 피합니다.",
    "category": "🦴 체형 및 관절 기초 통증"
  },
  {
    "symptom": "허리를 펴고 오래 서있으면 척추 기립근 전체가 나무토막처럼 뻣뻣해져요",
    "image_url": "assets/images/lumbar.png",
    "clinical_insight": "💡 임상 메커니즘: 요추부 기립근은 체중을 지탱하느라 항상 단축 및 과긴장(Tonic)하는 반면, 흉추부 기립근은 굽은 등에 의해 뒤로 늘어나서 힘을 잃게 됩니다(Phasic). 즉, 같은 기립근이라도 부위별로 접근이 달라야 합니다.",
    "assessment": {
      "mrt": "MRT (2-2-2 Rule): 엎드려 척추를 신전할 때 요추와 흉추 중 어느 부위에서 먼저 과활성 또는 떨림이 일어나는지 관찰",
      "mmt_details": [
        {
          "muscle": "척추 기립근 - 요추부 (Erector Spinae Lumborum)",
          "position": "1. 자세: Prone 자세에서 상체를 바닥에서 약간 들어올린다.",
          "fixation": "2. 고정: 골반 후면을 단단히 고정한다.",
          "test": "3. 검사: 흉추 하단부에 접촉하여 바닥 방향으로 하방 저항을 준다."
        },
        {
          "muscle": "척추 기립근 - 흉추부 (Erector Spinae Thoracis)",
          "position": "1. 자세: Prone 자세에서 가슴을 바닥에서 들어올려 흉추 신전을 만든다.",
          "fixation": "2. 고정: 요추부나 골반을 고정한다.",
          "test": "3. 검사: 상부 흉추에 접촉하여 바닥 방향으로 하방 저항을 준다."
        }
      ]
    },
    "involved_muscles": [
      {
        "name": "기립근 요추부 (Erector Spinae L&C)",
        "origin": "Sacrum, Iliac crest, Lumbar vertebrae",
        "insertion": "Ribs, Cervical/Thoracic vertebrae",
        "action": "Spinal extension, Lateral flexion",
        "type": "Tonic (이완 대상)"
      },
      {
        "name": "기립근 흉추부 (Erector Spinae Middle Thoracic)",
        "origin": "Thoracic spinous processes",
        "insertion": "Upper thoracic vertebrae",
        "action": "Spinal extension",
        "type": "Phasic (강화 대상)"
      }
    ],
    "manual_technique": {
      "met": "요추부 PIR: 환자가 앉아서 둥글게 허리를 구부린 후, 치료사가 누르는 힘에 대항해 뒤로 펴려는 힘(20%)을 내며 7초 후 이완하여 굽힘을 늘린다.",
      "prt": "척추 기립근의 가장 단단한 띠(Taut band)를 핀칭 후, 허리를 살짝 신전시키거나 측굴하여 긴장이 떨어지는 위치에서 90초 유지한다."
    },
    "red_flag": "만성적인 척추관 협착증이나 전방전위증이 있는 경우 척추 신전을 강제하면 신경 압박이 극심해지므로 꺾는 동작을 금지합니다.",
    "category": "🦴 체형 및 관절 기초 통증"
  },
  {
    "symptom": "[스쿼트] 깊게 앉으면 골반이 뒤로 둥글게 말리며 허리가 불안해요 (Butt Wink)",
    "image_url": "assets/images/lumbar.png",
    "clinical_insight": "💡 임상 메커니즘: 햄스트링/대둔근이 뻣뻣하거나 고관절 굴곡근(장요근)이 약해지면, 고관절에서 나와야 할 굴곡 각도를 요추가 억지로 둥글게 말면서(골반 후방경사) 보상하는 전형적인 벗윙크 현상입니다.",
    "assessment": {
      "mrt": "MRT (2-2-2 Rule): 능동적 고관절 굴곡 시 장요근 약화, 슬관절 신전 시 햄스트링 단축성 통증 확인",
      "mmt_details": [
        {
          "muscle": "장요근 (Iliopsoas)",
          "position": "1. 자세: 앉은 자세에서 고관절을 90도 이상 굴곡시킨다.",
          "fixation": "2. 고정: 반대쪽 골반을 고정하여 흔들리지 않게 한다.",
          "test": "3. 검사: 대퇴부 원위부에 접촉하여 하방(신전) 방향으로 저항을 준다."
        },
        {
          "muscle": "햄스트링 (Hamstrings)",
          "position": "1. 자세: Supine에서 다리를 곧게 펴고 들어올린다 (SLR Test).",
          "fixation": "2. 고정: 반대쪽 다리가 들리지 않게 골반을 고정한다.",
          "test": "3. 검사: 70도 미만에서 저항감이 강하게 걸리는지 타이트함을 평가한다."
        }
      ]
    },
    "involved_muscles": [
      {
        "name": "햄스트링 (Hamstrings)",
        "origin": "Ischial tuberosity",
        "insertion": "Head of fibula, Medial condyle of tibia",
        "action": "Extension (hip), Flexion (knee)",
        "type": "Tonic (이완 대상)"
      },
      {
        "name": "장요근 (Iliopsoas)",
        "origin": "T12-L5 vertebrae, Iliac fossa",
        "insertion": "Lesser trochanter of femur",
        "action": "Flexion (hip)",
        "type": "Phasic (강화 대상)"
      }
    ],
    "manual_technique": {
      "met": "장요근 RI: 환자에게 능동적으로 무릎을 가슴으로 당기게 하고(장요근 수축), 길항근인 햄스트링과 대둔근의 상호억제 이완을 유도합니다.",
      "prt": "햄스트링 기시부(좌골결절) 주변 압박 후, 무릎을 살짝 굽혀 텐션을 완전히 뺀 상태에서 90초 유지합니다."
    },
    "red_flag": "스쿼트 시 요추 하단에서 찌릿하거나 전기가 통하는 느낌이 든다면 이미 디스크 팽윤이 진행 중일 수 있으므로 즉시 가동범위를 제한해야 합니다.",
    "category": "🏋️‍♂️ 웨이트 트레이닝 기능 손상"
  },
  {
    "symptom": "[벤치프레스] 가슴 자극은 없고 어깨 앞쪽 관절만 찢어질 듯 아파요",
    "image_url": "assets/images/shoulder.png",
    "clinical_insight": "💡 임상 메커니즘: 전거근과 하부승모근이 약하면 바벨을 내릴 때 견갑골을 등 뒤로 단단히 모아주지(Retraction) 못하고, 어깨가 앞으로 둥글게 말려(Anterior Glide) 이두근 건과 전면 삼각근에 100% 부하가 걸립니다.",
    "assessment": {
      "mrt": "MRT (2-2-2 Rule): 견갑골 후인/하강 등척성 수축 시 전거근/하부승모근의 Phasic 약화 파악",
      "mmt_details": [
        {
          "muscle": "하부승모근 (Lower Trapezius)",
          "position": "1. 자세: Prone 자세에서 팔을 145도(Y자) 외전 + 엄지가 위를 향하게 한다.",
          "fixation": "2. 고정: 반대쪽 흉곽과 골반을 단단히 고정한다.",
          "test": "3. 검사: 팔목 근위부에 접촉하여 바닥 방향으로 하방 저항을 준다."
        },
        {
          "muscle": "상완이두근 장두 (Biceps Long Head)",
          "position": "1. 자세: 앉은 자세에서 팔을 90도 앞으로 뻗고 회외(Supination) 시킨다 (Speed Test).",
          "fixation": "2. 고정: 어깨 후면을 고정한다.",
          "test": "3. 검사: 팔목을 아래로 누르며 버티게 하여 어깨 앞쪽 결절간구 통증을 유발한다."
        }
      ]
    },
    "involved_muscles": [
      {
        "name": "하부승모근 (Lower Trapezius)",
        "origin": "Spinous processes of T4-T12",
        "insertion": "Spine of scapula",
        "action": "Depression, Upward rotation, Retraction",
        "type": "Phasic (강화 대상)"
      },
      {
        "name": "상완이두근 장두 건 (Biceps Long Head Tendon)",
        "origin": "Supraglenoid tubercle of scapula",
        "insertion": "Radial tuberosity",
        "action": "Shoulder flexion (weak), Elbow flexion",
        "type": "Tonic (이완 대상)"
      }
    ],
    "manual_technique": {
      "met": "하부승모근 활성화: Y자 레이즈 자세에서 환자가 위로 올리는 힘(20%)을 내고 7초간 버텨 견갑골 안정화 근육을 깨웁니다.",
      "prt": "어깨 전면 결절간구(이두근 건) 부위를 핀칭 후, 팔을 약간 굴곡 및 내회전 시켜 통증이 가장 줄어드는 각도에서 90초 유지합니다."
    },
    "red_flag": "어깨 앞쪽을 누를 때 찌릿함을 넘어 팔 아래로 저린 느낌이 든다면, 단순히 건염이 아니라 신경 압박일 가능성이 큽니다.",
    "category": "🏋️‍♂️ 웨이트 트레이닝 기능 손상"
  },
  {
    "symptom": "[데드리프트] 엉덩이 힘은 안 들어오고 기립근만 터질 것 같이 뭉쳐요",
    "image_url": "assets/images/lumbar.png",
    "clinical_insight": "💡 임상 메커니즘: 대둔근에 불이 들어오지 않는 '둔근 기억상실증(Gluteal Amnesia)' 상태에서 무거운 무게를 들면, 협력근인 척추 기립근과 햄스트링이 메인 엔진 역할을 강제로 떠맡아 과부하가 걸립니다.",
    "assessment": {
      "mrt": "MRT (2-2-2 Rule): 엎드려 고관절 신전 시 대둔근보다 기립근이나 햄스트링이 먼저 굳어지는(Firing Sequence 오류) 현상 관찰",
      "mmt_details": [
        {
          "muscle": "대둔근 (Gluteus Maximus)",
          "position": "1. 자세: Prone 자세에서 무릎을 90도 굽힌 채 다리를 천장으로 든다.",
          "fixation": "2. 고정: 골반이 들리지 않게 손으로 꽉 눌러 고정한다.",
          "test": "3. 검사: 대퇴부 하단에 접촉하여 바닥 방향으로 누르며 버티게 한다."
        },
        {
          "muscle": "척추 기립근 (Erector Spinae)",
          "position": "1. 자세: Prone 자세에서 가슴을 살짝 든다.",
          "fixation": "2. 고정: 골반을 누른다.",
          "test": "3. 검사: 기립근이 대둔근보다 먼저 딱딱해지는지 촉진한다."
        }
      ]
    },
    "involved_muscles": [
      {
        "name": "대둔근 (Gluteus Maximus)",
        "origin": "Posterior ilium, sacrum, coccyx",
        "insertion": "Gluteal tuberosity, IT band",
        "action": "Hip extension",
        "type": "Phasic (강화 대상)"
      },
      {
        "name": "기립근 요추부 (Erector Spinae)",
        "origin": "Sacrum, Iliac crest",
        "insertion": "Ribs, Vertebrae",
        "action": "Spinal extension",
        "type": "Tonic (과활성화 대상)"
      }
    ],
    "manual_technique": {
      "met": "대둔근 활성화: 무릎을 굽히고 다리를 뒤로 드는 힘(20%)을 내게 한 뒤 버티며 둔근의 독립적인 수축감을 인지시킵니다.",
      "prt": "허리 기립근의 단단한 띠를 핀칭 후, 요추를 살짝 측굴/신전 시켜 텐션이 빠지는 지점에서 90초 유지합니다."
    },
    "red_flag": "데드리프트 직후 허리를 굽히지도 펴지도 못하는 급성 요추 염좌(Sprain) 발생 시 절대 수기요법을 피하고 냉찜질 및 휴식이 필요합니다.",
    "category": "🏋️‍♂️ 웨이트 트레이닝 기능 손상"
  },
  {
    "symptom": "[오버헤드 프레스] 팔이 끝까지 안 펴지고 허리가 활처럼 과하게 꺾여요",
    "image_url": "assets/images/shoulder.png",
    "clinical_insight": "💡 임상 메커니즘: 광배근과 대원근이 단축되어 있으면 팔을 180도 들어 올리는 굴곡 동작에 락(Lock)이 걸립니다. 이를 뚫고 무게를 밀어 올리려다 보니 보상 작용으로 흉곽이 들리고 허리가 꺾이는 것입니다.",
    "assessment": {
      "mrt": "MRT (2-2-2 Rule): 누워서 팔을 머리 위로 올릴 때(Shoulder Flexion) 허리가 바닥에서 붕 뜨는지 확인",
      "mmt_details": [
        {
          "muscle": "광배근 (Latissimus Dorsi)",
          "position": "1. 자세: Prone 자세에서 팔을 몸통에 붙이고 내회전한다.",
          "fixation": "2. 고정: 반대쪽 골반을 고정한다.",
          "test": "3. 검사: 팔목에 접촉하여 굴곡/외전 방향으로 당기며 저항한다."
        },
        {
          "muscle": "하부승모근 (Lower Trapezius)",
          "position": "1. 자세: Prone 자세에서 팔을 145도 올린다.",
          "fixation": "2. 고정: 반대쪽 흉곽을 고정한다.",
          "test": "3. 검사: 팔목을 바닥으로 누르며 견갑골 상방회전 능력을 평가한다."
        }
      ]
    },
    "involved_muscles": [
      {
        "name": "광배근 (Latissimus Dorsi)",
        "origin": "Thoracolumbar fascia, Iliac crest",
        "insertion": "Intertubercular groove of humerus",
        "action": "Extension, Adduction, Internal rotation",
        "type": "Tonic (이완 대상)"
      },
      {
        "name": "하부승모근 (Lower Trapezius)",
        "origin": "Spinous processes T4-T12",
        "insertion": "Spine of scapula",
        "action": "Upward rotation, Depression",
        "type": "Phasic (강화 대상)"
      }
    ],
    "manual_technique": {
      "met": "광배근 PIR: 팔을 끝까지 만세 시킨 상태에서 환자가 팔을 다시 내리려는 힘(20%)을 내고, 치료사가 이를 버티며 7초 후 위로 더 늘려줍니다.",
      "prt": "겨드랑이 뒤쪽 광배근/대원근 부착부를 넓게 잡고 팔을 내전시켜 근육을 접은 후 90초 유지합니다."
    },
    "red_flag": "허리가 꺾일 때 요추 후관절(Facet joint)이 맞닿으면서 날카로운 핀칭 통증이 발생할 수 있으므로, 척추 분리증 의심 시 주의합니다.",
    "category": "🏋️‍♂️ 웨이트 트레이닝 기능 손상"
  },
  {
    "symptom": "[턱걸이/랫풀다운] 등에 힘이 안 들어가고 뒷목과 승모근만 뻐근해요",
    "image_url": "assets/images/neck.png",
    "clinical_insight": "💡 임상 메커니즘: 당기는 동작에서 견갑골을 하강(Depression)시키는 하부승모근과 광배근 하부가 쓰이지 않으면, 상부승모근과 견갑거근이 어깨를 으쓱(Elevation) 올리면서 억지로 바를 당기게 됩니다.",
    "assessment": {
      "mrt": "MRT (2-2-2 Rule): 견갑골 거상/하강 등척성 수축 시 상부승모근의 과활성화 및 하부승모근의 스위칭 결함 확인",
      "mmt_details": [
        {
          "muscle": "상부승모근 (Upper Trapezius)",
          "position": "1. 자세: 어깨를 으쓱 올리고 고개를 같은 쪽으로 기울인다.",
          "fixation": "2. 고정: 없음.",
          "test": "3. 검사: 어깨와 고개를 찢어내듯 반대 방향으로 누른다."
        },
        {
          "muscle": "광배근 하부 섬유 (Lower Latissimus Dorsi)",
          "position": "1. 자세: Prone 자세에서 팔을 신전/내전 시킨다.",
          "fixation": "2. 고정: 골반 고정.",
          "test": "3. 검사: 팔을 굴곡 방향으로 뜯어내며 하부 텐션을 살핀다."
        }
      ]
    },
    "involved_muscles": [
      {
        "name": "상부승모근 (Upper Trapezius)",
        "origin": "Occipital bone, Nuchal ligament",
        "insertion": "Lateral clavicle, Acromion",
        "action": "Scapular elevation",
        "type": "Tonic (이완 대상)"
      },
      {
        "name": "하부승모근/광배근 (Lower Trap / Lats)",
        "origin": "Lower Thoracic / Lumbar vertebrae",
        "insertion": "Scapula spine / Humerus",
        "action": "Scapular depression, Retraction",
        "type": "Phasic (강화 대상)"
      }
    ],
    "manual_technique": {
      "met": "상부승모근 PIR: 고개를 반대로 굽혀 승모근을 늘린 뒤, 어깨를 으쓱하려는 힘(20%)에 대항해 7초 버티고, 10초간 고개를 더 늘립니다.",
      "prt": "상부승모근의 가장 두꺼운 근복을 핀칭 후, 고개를 같은 쪽으로 굽혀 텐션을 완전히 느슨하게 만들고 90초 유지합니다."
    },
    "red_flag": "뒷목 통증과 함께 두통이나 구역질이 동반된다면, 후두하 신경 압박이 심각한 상태일 수 있습니다.",
    "category": "🏋️‍♂️ 웨이트 트레이닝 기능 손상"
  },
  {
    "symptom": "[런지/스플릿 스쿼트] 내려갈 때 앞발 무릎이 자꾸 안쪽으로 꺾여요 (Knee Valgus)",
    "image_url": "assets/images/leg.png",
    "clinical_insight": "💡 임상 메커니즘: 중둔근(골반 외전근)이 체중을 버티지 못해 약해지면, 강력한 내전근 그룹이 무릎을 안쪽으로 강제로 끌고 들어옵니다. 이는 전방십자인대(ACL)에 막대한 부하를 줍니다.",
    "assessment": {
      "mrt": "MRT (2-2-2 Rule): 외발 서기(Single leg stance) 시 골반이 무너지거나 무릎이 내전되는 보상 작용 관찰",
      "mmt_details": [
        {
          "muscle": "중둔근 (Gluteus Medius)",
          "position": "1. 자세: 측와위에서 위쪽 다리를 벌리고 약간 뒤로 보낸다.",
          "fixation": "2. 고정: 골반이 뒤로 눕지 않게 고정.",
          "test": "3. 검사: 대퇴부 하단을 바닥 방향으로 누르며 버티게 한다."
        },
        {
          "muscle": "장/단내전근 (Adductors)",
          "position": "1. 자세: Supine에서 다리를 안으로 모은다.",
          "fixation": "2. 고정: 반대쪽 골반 고정.",
          "test": "3. 검사: 무릎 내측을 바깥으로 밀어내며 내전근 단축을 확인한다."
        }
      ]
    },
    "involved_muscles": [
      {
        "name": "중둔근 (Gluteus Medius)",
        "origin": "Outer surface of ilium",
        "insertion": "Greater trochanter",
        "action": "Hip abduction, Stabilization",
        "type": "Phasic (강화 대상)"
      },
      {
        "name": "내전근 그룹 (Adductor Complex)",
        "origin": "Pubis",
        "insertion": "Linea aspera of femur",
        "action": "Hip adduction",
        "type": "Tonic (이완 대상)"
      }
    ],
    "manual_technique": {
      "met": "내전근 PIR: 나비 자세로 눕혀 허벅지를 벌리고, 환자가 무릎을 오므리는 힘(20%)을 내면 치료사가 버티며 7초 후 무릎을 더 바닥으로 누릅니다.",
      "prt": "서혜부 안쪽 내전근 기시부를 압박하고 고관절을 굴곡/내전시켜 느슨하게 한 뒤 90초 유지합니다."
    },
    "red_flag": "무릎이 안으로 꺾일 때 무릎 내측(MCL)이나 슬개골 하단에서 '뚝' 소리와 함께 예리한 통증이 발생하면 인대/반월상연골 손상 주의.",
    "category": "🏋️‍♂️ 웨이트 트레이닝 기능 손상"
  },
  {
    "symptom": "[바벨 로우] 날개뼈가 잘 안 모이고 팔꿈치나 이두근만 과하게 펌핑돼요",
    "image_url": "assets/images/shoulder.png",
    "clinical_insight": "💡 임상 메커니즘: 능형근과 중부승모근이 날개뼈를 척추 쪽으로 당겨주지 못하면, 바벨을 끌어올리기 위해 상완이두근과 후면 삼각근이 메인 동력원으로 쓰이면서 팔만 아프게 됩니다.",
    "assessment": {
      "mrt": "MRT (2-2-2 Rule): 능동적 견갑골 후인(Retraction) 시 능형근의 쥐내림 여부와 이두근의 보상적 수축 관찰",
      "mmt_details": [
        {
          "muscle": "능형근 (Rhomboids)",
          "position": "1. 자세: 앉은 자세에서 열중쉬어 후 날개뼈를 뒤로 모은다.",
          "fixation": "2. 고정: 반대쪽 어깨 고정.",
          "test": "3. 검사: 팔꿈치를 앞쪽으로 잡아당기며 날개뼈가 벌어지는지 테스트한다."
        },
        {
          "muscle": "상완이두근 (Biceps Brachii)",
          "position": "1. 자세: 팔꿈치를 90도 굽히고 손바닥을 위로 한다.",
          "fixation": "2. 고정: 팔꿈치 밑을 고정.",
          "test": "3. 검사: 손목을 눌러 신전시키며 이두근의 과긴장을 체크한다."
        }
      ]
    },
    "involved_muscles": [
      {
        "name": "능형근 (Rhomboids)",
        "origin": "Spinous processes C7-T5",
        "insertion": "Medial border of scapula",
        "action": "Scapular retraction",
        "type": "Phasic (강화 대상)"
      },
      {
        "name": "상완이두근 (Biceps Brachii)",
        "origin": "Scapula (Coracoid, Supraglenoid)",
        "insertion": "Radial tuberosity",
        "action": "Elbow flexion",
        "type": "Tonic (이완 대상)"
      }
    ],
    "manual_technique": {
      "met": "능형근 활성화: 날개뼈를 뒤로 모은 상태에서 치료사가 날개뼈를 바깥으로 벌리려 하고, 환자는 20% 힘으로 버티게 하여 근육을 깨웁니다.",
      "prt": "상완이두근의 단단한 근복을 핀칭 후, 팔꿈치와 어깨를 굽혀(Slacked) 90초 유지합니다."
    },
    "red_flag": "이두근 건염이 심한 상태에서 무거운 로우 동작을 반복하면 건 파열(Biceps Tear)의 위험이 있습니다.",
    "category": "🏋️‍♂️ 웨이트 트레이닝 기능 손상"
  },
  {
    "symptom": "[아침 기상 시] 침대에서 첫 발을 디딜 때 발바닥과 뒤꿈치가 찢어질 듯 아파요 (족저근막염 패턴)",
    "image_url": "assets/images/leg.png",
    "clinical_insight": "💡 임상 메커니즘: 수면 중에는 발목이 펴져(Plantar flexion) 종아리와 족저근막이 짧아진 채 굳습니다. 아침에 체중을 싣는 순간 굳어있던 단축된 근막이 강제로 찢어지며 극심한 통증을 유발합니다.",
    "assessment": {
      "mrt": "MRT (2-2-2 Rule): 족지 굴곡/신전 시 발바닥 근막의 텐션 확인, 비복근 등척성 수축 시 과긴장 확인",
      "mmt_details": [
        {
          "muscle": "가자미근 (Soleus)",
          "position": "1. 자세: Prone에서 무릎을 90도 굽히고 발목을 저측굴곡 한다.",
          "fixation": "2. 고정: 정강이를 바닥에 단단히 고정한다.",
          "test": "3. 검사: 발바닥을 배측굴곡 방향으로 꺾어 누르며 강하게 저항을 준다."
        },
        {
          "muscle": "족저근막/단지굴근 (Plantar Fascia / Flexor Digitorum Brevis)",
          "position": "1. 자세: 발가락을 위로 최대한 꺾는다 (Windlass Test).",
          "fixation": "2. 고정: 발뒤꿈치를 고정한다.",
          "test": "3. 검사: 족저근막 띠가 팽팽해질 때 발뒤꿈치 종골 부착부에 통증이 유발되는지 확인한다."
        }
      ]
    },
    "involved_muscles": [
      {
        "name": "가자미근/비복근 (Soleus/Gastrocnemius)",
        "origin": "Tibia, Fibula, Femur",
        "insertion": "Calcaneus (Achilles tendon)",
        "action": "Plantar flexion",
        "type": "Tonic (이완 대상)"
      },
      {
        "name": "후경골근 (Tibialis Posterior)",
        "origin": "Posterior Tibia/Fibula",
        "insertion": "Navicular, Cuneiform",
        "action": "Inversion, Supports arch",
        "type": "Tonic (이완 대상)"
      }
    ],
    "manual_technique": {
      "met": "비복근/가자미근 PIR: 발목을 위로 꺾은(Dorsiflexion) 상태에서 환자가 페달을 밟듯 20%의 힘을 내고 7초 후 스트레칭 범위를 늘립니다.",
      "prt": "종아리 하단(아킬레스건 이행부)의 압통점을 누르고, 무릎을 굽히고 발목을 펴서 텐션을 완전히 뺀 후 90초 유지합니다."
    },
    "red_flag": "단순 근막염이 아닌 종골 골극(Heel Spur)이 뼈에 자라난 상태라면 수기요법만으로 근본 해결이 어려울 수 있습니다.",
    "category": "💼 일상생활 만성 증후군"
  },
  {
    "symptom": "[계단/등산] 내리막을 걸을 때 무릎 바깥쪽에서 뚝뚝 소리가 나고 시큰거려요 (장경인대 증후군)",
    "image_url": "assets/images/leg.png",
    "clinical_insight": "💡 임상 메커니즘: 대퇴근막장근(TFL)과 대둔근의 불균형으로 장경인대(IT Band)가 뻣뻣해지면, 무릎이 30도 굽혀질 때마다 인대가 대퇴골 외측상과를 긁고 넘어가며 마찰과 염증을 발생시킵니다.",
    "assessment": {
      "mrt": "MRT (2-2-2 Rule): Ober Test 자세에서 IT Band의 물리적 단축 확인",
      "mmt_details": [
        {
          "muscle": "대퇴근막장근 (TFL)",
          "position": "1. 자세: Supine에서 다리를 살짝 들고 벌리며 안쪽으로 돌린다.",
          "fixation": "2. 고정: 반대쪽 골반 고정.",
          "test": "3. 검사: 다리를 안으로 밀어넣으면서 밑으로 누른다."
        },
        {
          "muscle": "외측광근 (Vastus Lateralis)",
          "position": "1. 자세: 앉아서 무릎을 편다.",
          "fixation": "2. 고정: 대퇴부 고정.",
          "test": "3. 검사: 발목을 눌러 무릎을 굽히게 하며 외측 대퇴부의 뻣뻣함을 평가한다."
        }
      ]
    },
    "involved_muscles": [
      {
        "name": "대퇴근막장근 (TFL) & IT Band",
        "origin": "ASIS",
        "insertion": "Lateral condyle of tibia (Gerdy's tubercle)",
        "action": "Hip abduction, flexion, internal rotation",
        "type": "Tonic (이완 대상)"
      },
      {
        "name": "중둔근 (Gluteus Medius)",
        "origin": "Outer ilium",
        "insertion": "Greater trochanter",
        "action": "Hip abduction",
        "type": "Phasic (강화 대상)"
      }
    ],
    "manual_technique": {
      "met": "TFL RI: 다리를 모아 바닥으로 늘려놓고, 환자에게 다리를 바깥/위로 벌리는 힘을 내게 하여 길항근(중둔근)을 수축시킴으로써 TFL을 이완합니다.",
      "prt": "골반 옆 TFL 근복을 강하게 압박하고 고관절을 외전/굴곡시켜 인대가 가장 느슨해지는 각도에서 90초 유지합니다."
    },
    "red_flag": "무릎 바깥쪽 관절선(Joint line) 자체를 누를 때 극심한 통증이 있다면 외측 반월상 연골판 손상일 수 있습니다.",
    "category": "💼 일상생활 만성 증후군"
  },
  {
    "symptom": "[장시간 PC 업무] 등 뒤쪽에 살이 붙은 것처럼 튀어나오고 화끈거려요 (버섯증후군/Dowager's Hump)",
    "image_url": "assets/images/neck.png",
    "clinical_insight": "💡 임상 메커니즘: 거북목이 심화되어 하부 경추(C7)와 상부 흉추(T1)가 과도하게 꺾이면, 인체는 척추를 보호하기 위해 해당 부위에 지방과 결합조직을 쌓아 단단한 버섯 모양의 패드를 만듭니다.",
    "assessment": {
      "mrt": "MRT (2-2-2 Rule): 경추 굴곡 시 C7-T1 분절에서 유연성이 없고 통째로 움직이는지 관찰",
      "mmt_details": [
        {
          "muscle": "하부경추/상부흉추 기립근",
          "position": "1. 자세: 앉아서 고개를 최대한 숙인다 (Chin to chest).",
          "fixation": "2. 고정: 흉곽 상단을 고정한다.",
          "test": "3. 검사: 후두하근과 능형근의 팽팽함, C7 주변의 뻐근한 통증 유발 여부를 체크한다."
        },
        {
          "muscle": "심부경추굴곡근 (Deep Cervical Flexors)",
          "position": "1. 자세: Supine에서 턱을 당긴 채 고개를 바닥에서 2cm만 든다.",
          "fixation": "2. 고정: 없음.",
          "test": "3. 검사: 10초 이상 버티지 못하고 턱이 들리면 심부근 약화(Phasic) 확진."
        }
      ]
    },
    "involved_muscles": [
      {
        "name": "후두하근 / 판상근 (Suboccipitals / Splenius)",
        "origin": "Upper cervical / Lower cervical",
        "insertion": "Occiput / Upper cervical",
        "action": "Neck extension",
        "type": "Tonic (이완 대상)"
      },
      {
        "name": "심부경추굴곡근 (Deep Cervical Flexors)",
        "origin": "Anterior cervical spine",
        "insertion": "Anterior cervical spine, Occiput",
        "action": "Neck flexion (Chin tuck)",
        "type": "Phasic (강화 대상)"
      }
    ],
    "manual_technique": {
      "met": "판상근/경추기립근 PIR: 턱을 당겨 고개를 굽힌 후, 환자가 뒤로 젖히려는 힘(20%)에 대항해 7초 버티고, 10초간 고개를 더 굽힙니다.",
      "prt": "버섯증후군 주위(C7)의 굳은 연부조직을 핀칭 후, 고개를 살짝 신전시켜 살이 말랑해지는 각도에서 90초 지그시 압박합니다."
    },
    "red_flag": "단순 지방 침착이 아닌 골다공증에 의한 압박골절로 척추 뼈 자체가 굽은 경우, 강한 압박은 골절을 악화시킬 수 있습니다.",
    "category": "💼 일상생활 만성 증후군"
  },
  {
    "symptom": "[키보드/마우스] 팔꿈치 바깥쪽부터 손등, 손목까지 뻐근하고 찌릿해요 (테니스 엘보 패턴)",
    "image_url": "assets/images/shoulder.png",
    "clinical_insight": "💡 임상 메커니즘: 키보드 타건과 마우스 클릭을 위해 손목 신전근(손등을 젖히는 근육)이 하루 종일 긴장하면, 이 근육들이 모여 붙는 팔꿈치 바깥쪽(외상과) 뼈 부착부에 지속적인 견인력이 가해져 염증이 발생합니다.",
    "assessment": {
      "mrt": "MRT (2-2-2 Rule): 손목 신전 등척성 수축 시 외상과 부위의 통증 유발 확인 (Cozen's Test 양상)",
      "mmt_details": [
        {
          "muscle": "장/단요측수근신근 (ECRL / ECRB)",
          "position": "1. 자세: 팔꿈치를 90도 굽히고 손등이 위로 향하게 한 뒤 손목을 젖힌다.",
          "fixation": "2. 고정: 전완부(팔뚝)를 고정한다.",
          "test": "3. 검사: 주먹 쥔 손등을 바닥 쪽으로 꺾어 내리며 버티게 한다."
        },
        {
          "muscle": "수지신근 (Extensor Digitorum)",
          "position": "1. 자세: 손가락들을 곧게 편다.",
          "fixation": "2. 고정: 손목을 고정한다.",
          "test": "3. 검사: 중지(가운데 손가락)를 누르며 버티게 할 때 팔꿈치에 통증이 오는지 확인한다."
        }
      ]
    },
    "involved_muscles": [
      {
        "name": "수근신근 그룹 (Wrist Extensors)",
        "origin": "Lateral epicondyle of humerus",
        "insertion": "Base of metacarpals",
        "action": "Wrist extension",
        "type": "Tonic (이완 대상)"
      },
      {
        "name": "수근굴근 그룹 (Wrist Flexors)",
        "origin": "Medial epicondyle of humerus",
        "insertion": "Carpals, Metacarpals",
        "action": "Wrist flexion",
        "type": "Phasic (강화 대상)"
      }
    ],
    "manual_technique": {
      "met": "수근신근 PIR: 팔꿈치를 펴고 손목을 아래로 꺾어(스트레칭) 텐션을 잡은 뒤, 환자가 위로 올리려는 힘(20%)에 대항해 7초 버티고 더 꺾어줍니다.",
      "prt": "팔꿈치 바깥쪽 외상과에서 2cm 아래 가장 뭉친 근복을 누르고, 손목을 뒤로 젖혀 텐션을 풀어준 상태로 90초 유지합니다."
    },
    "red_flag": "팔꿈치가 붓고 열감이 있으며 가만히 있어도 욱신거린다면 급성 염증기이므로 스트레칭과 마사지를 절대 금지해야 합니다.",
    "category": "💼 일상생활 만성 증후군"
  },
  {
    "symptom": "[오래 서있기] 배가 앞으로 튀어나오고 허리가 뒤로 과하게 꺾이는 체형이에요 (Sway Back)",
    "image_url": "assets/images/lumbar.png",
    "clinical_insight": "💡 임상 메커니즘: 코어(복직근/외복사근)와 둔근이 완전히 힘을 잃으면, 뼈와 인대에 체중을 걸쳐서 서게 됩니다. 이로 인해 골반은 앞으로 밀려나가고 흉추는 뒤로 굽는 스웨이백(Sway Back) 체형이 고착화됩니다.",
    "assessment": {
      "mrt": "MRT (2-2-2 Rule): 엎드려 다리 들기 시 둔근 약화, 바로 누워 상체 말아 올리기 시 복근 떨림/약화 관찰",
      "mmt_details": [
        {
          "muscle": "복직근 (Rectus Abdominis)",
          "position": "1. 자세: Supine에서 무릎을 굽히고 어깨가 바닥에서 떨어지도록 상체를 만다(Crunch).",
          "fixation": "2. 고정: 발을 고정한다.",
          "test": "3. 검사: 가슴에 손을 얹고 바닥 쪽으로 누르며 버티게 한다."
        },
        {
          "muscle": "슬괵근 / 햄스트링 (Hamstrings)",
          "position": "1. 자세: Prone에서 무릎을 살짝 굽힌다.",
          "fixation": "2. 고정: 골반 고정.",
          "test": "3. 검사: 무릎을 펴는 방향으로 누르며 햄스트링의 과활성화 여부를 평가한다 (Sway back은 햄스트링이 Tonic 함)."
        }
      ]
    },
    "involved_muscles": [
      {
        "name": "복부 근육군 (Abdominals)",
        "origin": "Pubic crest, Ribs",
        "insertion": "Ribs, Linea alba, Pelvis",
        "action": "Trunk flexion",
        "type": "Phasic (강화 대상)"
      },
      {
        "name": "햄스트링 (Hamstrings)",
        "origin": "Ischial tuberosity",
        "insertion": "Tibia, Fibula",
        "action": "Hip extension",
        "type": "Tonic (과긴장 상태)"
      }
    ],
    "manual_technique": {
      "met": "햄스트링 PIR: 다리를 들어 올려 텐션을 잡고, 환자가 바닥으로 내리려는 힘(20%)에 저항 후 다리를 머리 쪽으로 더 늘려줍니다.",
      "prt": "좌골결절(엉덩이 밑 뼈) 주변 햄스트링 기시부를 압박하고, 무릎을 굽혀 느슨하게 한 뒤 90초 유지합니다."
    },
    "red_flag": "서 있을 때 허리 통증을 넘어 다리 전체로 터질 듯한 저림(파행)이 발생하면 척추관 협착증이 심화된 상태일 수 있습니다.",
    "category": "💼 일상생활 만성 증후군"
  },
  {
    "symptom": "[장시간 운전/앉기] 엉덩이 깊은 곳부터 허벅지 뒤쪽을 타고 다리까지 저려요 (이상근 증후군 패턴)",
    "image_url": "assets/images/leg.png",
    "clinical_insight": "💡 임상 메커니즘: 장시간 앉아 있으면 이상근(Piriformis)이 굳어지며 두꺼워집니다. 이상근 바로 밑을 지나가는 좌골신경(Sciatic Nerve)이 이 두꺼워진 근육에 짓눌려 허리 디스크와 유사한 극심한 저림을 유발합니다.",
    "assessment": {
      "mrt": "MRT (2-2-2 Rule): 고관절 내/외회전 시 이상근의 경련성 통증 및 방사통 재현 여부 확인 (FAIR Test)",
      "mmt_details": [
        {
          "muscle": "이상근 (Piriformis)",
          "position": "1. 자세: Prone 자세에서 무릎을 90도 굽히고 다리를 바깥으로 기울인다 (고관절 내회전 상태).",
          "fixation": "2. 고정: 검사하는 쪽 골반을 고정한다.",
          "test": "3. 검사: 발목 내측을 잡고 밖으로(고관절 외회전 방향) 밀어내며 버티게 한다."
        },
        {
          "muscle": "대둔근 (Gluteus Maximus)",
          "position": "1. 자세: Prone에서 무릎을 굽히고 다리를 천장으로 든다.",
          "fixation": "2. 고정: 골반 고정.",
          "test": "3. 검사: 대둔근 약화 시 이상근이 외회전/신전을 대신하려다 과부하가 걸리는지 파악."
        }
      ]
    },
    "involved_muscles": [
      {
        "name": "이상근 (Piriformis)",
        "origin": "Anterior surface of sacrum",
        "insertion": "Greater trochanter of femur",
        "action": "Hip external rotation, Abduction",
        "type": "Tonic (이완 대상)"
      },
      {
        "name": "쌍자근/폐쇄근 (Gemellus/Obturator)",
        "origin": "Ischium, Pelvis",
        "insertion": "Greater trochanter",
        "action": "Hip external rotation",
        "type": "Tonic (이완 대상)"
      }
    ],
    "manual_technique": {
      "met": "이상근 PIR: Supine에서 무릎을 가슴으로 당기고 반대쪽 어깨 방향으로 꺾은(FAIR) 상태에서, 환자가 무릎을 밖으로 벌리려는 힘(20%)에 7초 저항 후 안으로 더 늘립니다.",
      "prt": "엉덩이 한가운데 깊은 곳(이상근 트리거포인트)을 팔꿈치나 엄지로 핀칭 후, 다리를 바깥으로 돌려(외회전) 통증이 사라지면 90초 유지합니다."
    },
    "red_flag": "수기요법 중 다리 저림이 폭발적으로 심해진다면, 단순 근육 뭉침이 아니라 요추 디스크 탈출증에 의한 진짜 좌골신경통일 수 있습니다.",
    "category": "💼 일상생활 만성 증후군"
  },
  {
    "symptom": "[달리기/빠른 걷기] 조금만 뛰어도 정강이 앞쪽 뼈를 따라 터질 듯이 아파요 (Shin Splints 양상)",
    "image_url": "assets/images/leg.png",
    "clinical_insight": "💡 임상 메커니즘: 뒤꿈치로 강하게 착지할 때, 전경골근이 발목이 쾅 떨어지지 않게 브레이크(신장성 수축)를 겁니다. 이 근육이 피로해지면 정강이 뼈(경골)에 붙은 골막을 지속적으로 잡아당겨 골막염(Shin Splints)을 유발합니다.",
    "assessment": {
      "mrt": "MRT (2-2-2 Rule): 족관절 배측굴곡(발목 젖힘) 후 등척성 수축 시 정강이 앞쪽으로 예리한 통증 유발 여부 확인",
      "mmt_details": [
        {
          "muscle": "전경골근 (Tibialis Anterior)",
          "position": "1. 자세: Supine에서 다리를 펴고 발목을 내번+배측굴곡 한다.",
          "fixation": "2. 고정: 종아리 하단을 고정한다.",
          "test": "3. 검사: 발등 안쪽을 누르며 외번+저측굴곡 방향으로 강하게 꺾어 저항한다."
        },
        {
          "muscle": "장지신근 (Extensor Digitorum Longus)",
          "position": "1. 자세: 발가락을 위로 편다.",
          "fixation": "2. 고정: 발등을 고정한다.",
          "test": "3. 검사: 발가락 윗면을 눌러 발가락이 버틸 수 있는지 체크한다."
        }
      ]
    },
    "involved_muscles": [
      {
        "name": "전경골근 (Tibialis Anterior)",
        "origin": "Lateral condyle/shaft of tibia",
        "insertion": "First cuneiform, 1st metatarsal",
        "action": "Ankle dorsiflexion, Inversion",
        "type": "Tonic (염증기에는 과활성, 평소엔 Phasic)"
      },
      {
        "name": "비복근/가자미근 (Calf muscles)",
        "origin": "Femur, Tibia, Fibula",
        "insertion": "Calcaneus",
        "action": "Ankle plantar flexion",
        "type": "Tonic (이완 대상)"
      }
    ],
    "manual_technique": {
      "met": "전경골근 PIR: 발목을 저측굴곡 시켜 정강이를 늘린 뒤, 환자가 위로 젖히려는 힘(20%)에 7초간 저항하고 범위를 더 늘려줍니다.",
      "prt": "정강이 뼈 바로 바깥쪽 근복을 핀칭 후, 발목을 위로 젖혀 근육을 짧게 만들어 통증이 사라지는 각도에서 90초 유지합니다."
    },
    "red_flag": "정강이 뼈 특정 부위에 콕 찌르는 듯한 극심한 점 통증(Point tenderness)이 있다면 피로 골절(Stress Fracture)일 수 있으므로 즉각 운동을 중지합니다.",
    "category": "💼 일상생활 만성 증후군"
  },
  {
    "symptom": "[스마트폰 사용] 턱 관절이 뻐근하고 목 앞쪽이 꽉 막혀 목소리가 잘 안 나와요",
    "image_url": "assets/images/neck.png",
    "clinical_insight": "💡 임상 메커니즘: 스마트폰을 보며 고개를 푹 숙이면 목 앞쪽의 흉쇄유돌근(SCM)과 사각근이 극도로 짧아집니다. 이 근육들이 굳으면 턱뼈를 아래로 끌어당겨 턱관절 통증을 유발하고, 기도/식도 주변 근막을 옥죄어 답답함을 만듭니다.",
    "assessment": {
      "mrt": "MRT (2-2-2 Rule): 목의 굴곡 및 회전 시 SCM의 밧줄 같은 띠(Taut band)가 튀어나오며 통증 유발 여부 확인",
      "mmt_details": [
        {
          "muscle": "흉쇄유돌근 (Sternocleidomastoid)",
          "position": "1. 자세: Supine에서 고개를 반대쪽으로 돌리고 살짝 든다.",
          "fixation": "2. 고정: 흉곽 상단을 가볍게 고정한다.",
          "test": "3. 검사: 이마(측두골)를 대각선 뒤쪽 바닥 방향으로 누르며 버티게 한다."
        },
        {
          "muscle": "광경근/설골근군 (Platysma / Hyoid muscles)",
          "position": "1. 자세: 입을 살짝 벌리고 아래턱을 내민다.",
          "fixation": "2. 고정: 없음.",
          "test": "3. 검사: 목 앞쪽 피부와 얇은 근육층의 뻣뻣함을 시각 및 촉각으로 평가한다."
        }
      ]
    },
    "involved_muscles": [
      {
        "name": "흉쇄유돌근 (SCM)",
        "origin": "Sternum, Clavicle",
        "insertion": "Mastoid process",
        "action": "Neck flexion, Contralateral rotation",
        "type": "Tonic (이완 대상)"
      },
      {
        "name": "교근 (Masseter - 턱관절 연관)",
        "origin": "Zygomatic arch",
        "insertion": "Angle of mandible",
        "action": "Closes jaw (Chewing)",
        "type": "Tonic (과긴장 대상)"
      }
    ],
    "manual_technique": {
      "met": "SCM PIR: 고개를 반대로 돌리고 신전시켜 SCM을 길게 늘린 후, 환자가 제자리로 돌아오려는 힘(10%)에 대항해 7초 버티고 더 늘려줍니다.",
      "prt": "SCM의 가장 뭉친 부위를 부드럽게 핀칭 후, 고개를 같은 쪽으로 돌려 근육을 완전히 느슨하게 만든 채 90초 유지합니다."
    },
    "red_flag": "목 앞쪽 마사지 중 경동맥(Carotid Artery)을 강하게 압박하면 혈압 저하로 기절할 수 있으므로 맥박이 뛰는 곳은 절대 강하게 누르지 않습니다.",
    "category": "💼 일상생활 만성 증후군"
  }
];