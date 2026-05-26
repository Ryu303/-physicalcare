const manualDataTree = [
  {
    "id": "part_knee_ankle",
    "title": "🦵 무릎/발목 (Knee & Ankle)",
    "type": "body_part",
    "children": [
      {
        "id": "sym_knee_outer",
        "title": "보행 시 무릎 바깥쪽 통증 및 짝다리",
        "type": "symptom_location",
        "children": [
          {
            "id": "disease_itb_pelvis",
            "title": "원인 A: 골반 기인 (장경인대 마찰 증후군)",
            "type": "disease",
            "children": [
              {
                "id": "sub_itb_glute",
                "title": "중둔근 약화 및 TFL 과활성화",
                "type": "sub_class",
                "clinical_insight": "고관절 외전근(중둔근)이 약해져 보행 시 골반이 무너지며, 이를 보상하기 위해 대퇴근막장근(TFL)이 무릎 바깥쪽 인대(ITB)를 마찰시키는 현상입니다.",
                "postural_pattern": "Sway Back (골반 전방이동) / 편측 짝다리 체형",
                "teaching_cues": {
                  "analogy": "회원님, 골반이 건물의 주춧돌인데 한쪽으로 무너져버리면 기둥(허벅지뼈)이 바깥으로 휘면서 무릎 바깥쪽 밧줄(인대)이 자꾸 뼈에 긁히게 되는 원리예요.",
                  "movement_cue": "조개껍질을 열듯이 무릎을 벌리되, 골반은 벽에 붙인 것처럼 절대 뒤로 넘어가지 않게 코어를 꽉 잡아보세요!"
                },
                "corrective_exercise": {
                  "step1_mobility": "TFL 및 외측광근 폼롤링 (무릎 바깥쪽 텐션 해소)",
                  "step2_activation": "사이드 라이잉 클램쉘 (Side-lying Clam shell) - 중둔근 후방 섬유 타겟",
                  "step3_integration": "싱글 레그 데드리프트 (Single-leg Deadlift) - 보행 시 골반 수평 유지 훈련"
                },
                "contraindications": [
                  "무릎이 안으로 모이는(Valgus) 중량 스쿼트",
                  "과도한 경사도(Incline)의 러닝머신 걷기",
                  "다리 꼬고 앉는 생활 습관"
                ],
                "assessment": {
                  "mrt": "[고관절 외전 저항 평가] 회원을 옆으로 눕히고(측와위) 위쪽 다리를 약간 뒤로 빼서(신전) 들어 올리게 합니다. 트레이너가 발목 부위에서 아래쪽으로 누를 때, 회원이 버티는 과정에서 중둔근의 근력 약화나 골반이 뒤로 휙 넘어가는 보상작용이 발생하는지 관찰합니다.",
                  "mmt_details": [
                    {
                      "muscle": "중둔근",
                      "position": "회원은 측와위(옆으로 누운 자세)로 눕고, 아래쪽 다리는 무릎을 굽혀 안정성을 확보한 뒤 위쪽 다리를 30도 외전 및 약간 신전시킵니다.",
                      "fixation": "트레이너는 한 손으로 회원의 장골능(Iliac crest)을 강하게 압박하여 골반이 흔들리지 않게 고정합니다.",
                      "test": "트레이너의 다른 손으로 회원의 발목 바로 위를 잡고 바닥을 향해(내전 방향) 점진적으로 강한 힘을 가하여 저항을 버티는지 평가합니다."
                    }
                  ]
                },
                "involved_muscles": [
                  {
                    "name": "중둔근 (Gluteus Medius)",
                    "origin": "Outer surface of ilium",
                    "insertion": "Greater trochanter",
                    "action": "Hip Abduction, Stabilization",
                    "type": "Phasic (강화)"
                  },
                  {
                    "name": "대퇴근막장근 (TFL)",
                    "origin": "ASIS",
                    "insertion": "Iliotibial tract",
                    "action": "Hip Flexion, Abduction, Internal Rotation",
                    "type": "Tonic (이완)"
                  }
                ],
                "manual_technique": {
                  "met": "TFL PIR: [자세] 회원은 앙와위(바로 누운 자세)로 눕고, 트레이너는 베드 옆에 섭니다. [기법] 검사할 다리를 베드 바깥으로 빼서 살짝 아래로 늘어뜨린 후, 회원에게 '다리를 안쪽 위로(굴곡/내전) 20%의 힘으로 올리세요'라고 지시합니다. 트레이너는 7초간 등척성 저항을 준 뒤, '힘 빼세요'라는 지시와 함께 다리를 바닥 쪽으로 더 깊게 눌러 TFL 근막을 길게 이완시킵니다.",
                  "prt": "TFL PRT: [자세] 회원을 앙와위로 눕힙니다. [기법] 트레이너는 골반 앞쪽 뼈(ASIS) 바로 아래 TFL 근복부의 압통점(Tender point)을 엄지로 지그시 누릅니다. 그 상태에서 회원의 무릎을 굽히고 다리를 바깥쪽(외전) 및 안쪽으로 회전(내회전)시켜, 엄지에 느껴지는 근육의 팽팽함이 가장 흐물흐물해지는(Slacked) 각도를 찾아 90초간 완벽히 유지한 후 천천히 원래 자세로 돌아옵니다."
                },
                "red_flag": "보행 시 무릎이 덜컥거리며 빠질 것 같은 느낌 시 십자인대 손상 의심 병원 진료 권장.",
                "image_url": "assets/images/leg.png"
              },
              {
                "id": "sub_itb_glute",
                "title": "중둔근 약화 및 TFL 과활성화",
                "type": "sub_class",
                "clinical_insight": "고관절 외전근(중둔근)이 약해져 보행 시 골반이 무너지며, 이를 보상하기 위해 대퇴근막장근(TFL)이 무릎 바깥쪽 인대(ITB)를 마찰시키는 현상입니다.",
                "postural_pattern": "Sway Back (골반 전방이동) / 편측 짝다리 체형",
                "teaching_cues": {
                  "analogy": "회원님, 골반이 건물의 주춧돌인데 한쪽으로 무너져버리면 기둥(허벅지뼈)이 바깥으로 휘면서 무릎 바깥쪽 밧줄(인대)이 자꾸 뼈에 긁히게 되는 원리예요.",
                  "movement_cue": "조개껍질을 열듯이 무릎을 벌리되, 골반은 벽에 붙인 것처럼 절대 뒤로 넘어가지 않게 코어를 꽉 잡아보세요!"
                },
                "corrective_exercise": {
                  "step1_mobility": "TFL 및 외측광근 폼롤링 (무릎 바깥쪽 텐션 해소)",
                  "step2_activation": "사이드 라이잉 클램쉘 (Side-lying Clam shell) - 중둔근 후방 섬유 타겟",
                  "step3_integration": "싱글 레그 데드리프트 (Single-leg Deadlift) - 보행 시 골반 수평 유지 훈련"
                },
                "contraindications": [
                  "무릎이 안으로 모이는(Valgus) 중량 스쿼트",
                  "과도한 경사도(Incline)의 러닝머신 걷기",
                  "다리 꼬고 앉는 생활 습관"
                ],
                "assessment": {
                  "mrt": "[고관절 외전 저항 평가] 회원을 옆으로 눕히고(측와위) 위쪽 다리를 약간 뒤로 빼서(신전) 들어 올리게 합니다. 트레이너가 발목 부위에서 아래쪽으로 누를 때, 회원이 버티는 과정에서 중둔근의 근력 약화나 골반이 뒤로 휙 넘어가는 보상작용이 발생하는지 관찰합니다.",
                  "mmt_details": [
                    {
                      "muscle": "중둔근",
                      "position": "회원은 측와위(옆으로 누운 자세)로 눕고, 아래쪽 다리는 무릎을 굽혀 안정성을 확보한 뒤 위쪽 다리를 30도 외전 및 약간 신전시킵니다.",
                      "fixation": "트레이너는 한 손으로 회원의 장골능(Iliac crest)을 강하게 압박하여 골반이 흔들리지 않게 고정합니다.",
                      "test": "트레이너의 다른 손으로 회원의 발목 바로 위를 잡고 바닥을 향해(내전 방향) 점진적으로 강한 힘을 가하여 저항을 버티는지 평가합니다."
                    }
                  ]
                },
                "involved_muscles": [
                  {
                    "name": "중둔근 (Gluteus Medius)",
                    "origin": "Outer surface of ilium",
                    "insertion": "Greater trochanter",
                    "action": "Hip Abduction, Stabilization",
                    "type": "Phasic (강화)"
                  },
                  {
                    "name": "대퇴근막장근 (TFL)",
                    "origin": "ASIS",
                    "insertion": "Iliotibial tract",
                    "action": "Hip Flexion, Abduction, Internal Rotation",
                    "type": "Tonic (이완)"
                  }
                ],
                "manual_technique": {
                  "met": "TFL PIR: [자세] 회원은 앙와위(바로 누운 자세)로 눕고, 트레이너는 베드 옆에 섭니다. [기법] 검사할 다리를 베드 바깥으로 빼서 살짝 아래로 늘어뜨린 후, 회원에게 '다리를 안쪽 위로(굴곡/내전) 20%의 힘으로 올리세요'라고 지시합니다. 트레이너는 7초간 등척성 저항을 준 뒤, '힘 빼세요'라는 지시와 함께 다리를 바닥 쪽으로 더 깊게 눌러 TFL 근막을 길게 이완시킵니다.",
                  "prt": "TFL PRT: [자세] 회원을 앙와위로 눕힙니다. [기법] 트레이너는 골반 앞쪽 뼈(ASIS) 바로 아래 TFL 근복부의 압통점(Tender point)을 엄지로 지그시 누릅니다. 그 상태에서 회원의 무릎을 굽히고 다리를 바깥쪽(외전) 및 안쪽으로 회전(내회전)시켜, 엄지에 느껴지는 근육의 팽팽함이 가장 흐물흐물해지는(Slacked) 각도를 찾아 90초간 완벽히 유지한 후 천천히 원래 자세로 돌아옵니다."
                },
                "red_flag": "보행 시 무릎이 덜컥거리며 빠질 것 같은 느낌 시 십자인대 손상 의심 병원 진료 권장.",
                "image_url": "assets/images/leg.png"
              }
            ]
          },
          {
            "id": "disease_knee_lumbar",
            "title": "원인 B: 요추 기인 (신경 방사통)",
            "type": "disease",
            "children": [
              {
                "id": "sub_l4l5_disc",
                "title": "L4-L5 신경근 압박성 통증",
                "type": "sub_class",
                "clinical_insight": "무릎 자체 문제가 없는데 무릎 외측부터 정강이까지 저린다면 요추 신경 압박에 의한 가짜 무릎 통증일 확률이 높습니다.",
                "postural_pattern": "Flat Back (일자 허리) / 요추 전만 소실",
                "teaching_cues": {
                  "analogy": "전선(신경)이 허리에서 눌려 있는데, 스피커(무릎)에서 잡음이 나는 것과 같아요. 스피커를 고칠 게 아니라 허리 쪽 전선을 펴줘야 합니다.",
                  "movement_cue": "허리가 바닥에 완전히 눌리지 않게, 손바닥 하나 들어갈 정도의 아치를 유지하며 호흡해보세요."
                },
                "corrective_exercise": {
                  "step1_mobility": "맥켄지 신전 운동 (Mckenzie Extension) - 요추 전만 회복",
                  "step2_activation": "버드독 (Bird-Dog) - 요부 다열근 및 코어 안정성 확보",
                  "step3_integration": "힙 힌지 (Hip Hinge) 인지 훈련 - 허리 대신 고관절 쓰기"
                },
                "contraindications": [
                  "허리를 둥글게 마는 윗몸일으키기(Sit-up)",
                  "데드리프트 및 바벨 로우 (요추 압력 급증)",
                  "다리를 뻗고 앉아 허리 숙이기 (Toe touch 스트레칭)"
                ],
                "assessment": {
                  "mrt": "[하지직거상(SLR) 및 발목 근력 평가] 앙와위에서 다리를 편 채로 들어 올려 30~70도 사이에서 무릎 바깥쪽이나 허리에 찌릿한 방사통이 재현되는지 확인하고, 추가로 L4 신경 지배를 받는 발목 배측굴곡 근력을 면밀히 체크합니다.",
                  "mmt_details": [
                    {
                      "muscle": "전경골근",
                      "position": "회원은 앙와위 또는 앉은 자세에서 발목을 몸 쪽으로 최대한 젖히고(배측굴곡) 발바닥을 안으로 돌립니다(내번).",
                      "fixation": "트레이너는 한 손으로 회원의 종아리 하단(하퇴부)을 흔들리지 않게 꽉 잡아 고정합니다.",
                      "test": "다른 손으로 회원의 발등을 감싸 쥐고 발바닥 쪽(저측굴곡) 및 바깥쪽(외번)으로 강하게 밀어내어 발목이 버티지 못하고 툭 떨어지는지(Foot drop 징후) 확인합니다."
                    }
                  ]
                },
                "involved_muscles": [
                  {
                    "name": "요부 다열근 (Lumbar Multifidus)",
                    "origin": "Sacrum, PSIS",
                    "insertion": "Spinous processes (spanning 2-4 vertebrae)",
                    "action": "Spinal stabilization, Extension",
                    "type": "Phasic (강화)"
                  }
                ],
                "manual_technique": {
                  "met": "[요추 이완기법] 회원은 앙와위로 눕고 양 무릎을 세웁니다. 트레이너는 회원의 발치에 서서 양손으로 회원의 종아리를 감싸 쥐고, 체중을 뒤로 실어 회원의 골반과 요추 부위가 아래쪽으로 부드럽게 당겨지도록(Traction) 30초 이상 지속적인 텐션을 제공하여 요추부 압력을 줄여줍니다.",
                  "prt": "장요근 PRT: 앙와위 자세에서 회원의 양 무릎을 굽혀 세웁니다. 배꼽과 ASIS를 잇는 선 중간 깊숙한 곳의 장요근 텐션 부위를 손끝으로 컨택한 후, 회원의 무릎을 가슴 쪽으로 깊게 굽혀(고관절 심굴곡) 복부의 텐션을 완전히 없앤 상태로 90초간 대기합니다."
                },
                "red_flag": "발목을 스스로 젖히지 못하는 Foot Drop 발생 시 즉각적인 병원 정밀검사 안내.",
                "image_url": "assets/images/lumbar.png"
              }
            ]
          }
        ]
      },
      {
        "id": "sym_knee_front",
        "title": "계단 오르내릴 때 무릎 앞쪽(슬개골) 시큰거림",
        "type": "symptom_location",
        "children": [
          {
            "id": "disease_pfps_quads",
            "title": "원인 A: 대퇴부 기인 (슬개대퇴통증증후군)",
            "type": "disease",
            "children": [
              {
                "id": "sub_quad_dominant",
                "title": "대퇴사두근 우세 및 햄스트링 약화",
                "type": "sub_class",
                "clinical_insight": "허벅지 앞쪽(대퇴사두근)이 뒤쪽(햄스트링)보다 비정상적으로 팽팽해져, 슬개골을 위로 강하게 잡아당겨 무릎 굽힘 시 관절면이 강하게 마찰됩니다.",
                "postural_pattern": "Quad Dominant (허벅지 앞쪽 우세 체형) / 골반 전방경사",
                "teaching_cues": {
                  "analogy": "앞쪽 밧줄(앞허벅지)이 너무 질겨져서 무릎 뚜껑 뼈를 위로 꽉 잡아당기니까, 굽힐 때마다 뼈끼리 사포처럼 긁히는 상태입니다.",
                  "movement_cue": "무릎을 앞으로 밀어내며 앉지 말고, 엉덩이로 뒤에 있는 투명 의자를 찾는 느낌으로 먼저 빠져보세요."
                },
                "corrective_exercise": {
                  "step1_mobility": "허벅지 전면부(대퇴직근) 폼롤링 및 장요근 스트레칭",
                  "step2_activation": "스위스볼 햄스트링 컬 (Swiss Ball Hamstring Curl) - 후면 사슬 활성화",
                  "step3_integration": "바벨 힙 스러스트 (Hip Thrust) - 엉덩이/햄스트링 우세 패턴 재교육"
                },
                "contraindications": [
                  "레그 익스텐션 머신 (슬개골 압박 최대로 증가)",
                  "무릎이 발끝을 과도하게 넘어가는 프론트 런지",
                  "내리막길 뛰기"
                ],
                "assessment": {
                  "mrt": "[토마스 변형 평가] 테이블 끝에 걸터앉아 한쪽 무릎을 가슴으로 안고 뒤로 눕습니다. 허공에 떠 있는 반대쪽 다리의 무릎이 90도 이상 굽혀지지 않고 앞을 향해 뻗어져 있다면 대퇴직근의 심각한 과긴장으로 판단합니다.",
                  "mmt_details": [
                    {
                      "muscle": "대퇴직근",
                      "position": "회원은 베드 끝에 앉아 종아리가 아래로 늘어지게 한 후, 무릎을 완전히 폅니다(슬관절 신전).",
                      "fixation": "트레이너는 한 손으로 회원의 허벅지 위쪽을 눌러 몸통이 들썩이지 않게 고정합니다.",
                      "test": "트레이너의 다른 손으로 회원의 발목 앞쪽을 잡고, 무릎을 굽히는(굴곡) 방향으로 서서히 강한 체중을 실어 누릅니다."
                    }
                  ]
                },
                "involved_muscles": [
                  {
                    "name": "대퇴직근 (Rectus Femoris)",
                    "origin": "AIIS",
                    "insertion": "Tibial tuberosity via Patellar tendon",
                    "action": "Hip Flexion, Knee Extension",
                    "type": "Tonic (이완)"
                  },
                  {
                    "name": "햄스트링 (Hamstrings)",
                    "origin": "Ischial tuberosity",
                    "insertion": "Tibia and Fibula",
                    "action": "Hip Extension, Knee Flexion",
                    "type": "Phasic (강화)"
                  }
                ],
                "manual_technique": {
                  "met": "대퇴직근 PIR: 회원을 엎드리게(복와위) 하고 무릎을 엉덩이 쪽으로 굽힙니다. 한계점에 도달하면 회원에게 무릎을 펴려는 힘(20%)을 쓰게 하고 트레이너는 7초간 그 힘을 못 움직이게 막습니다. 이후 회원이 힘을 빼면 트레이너가 발뒤꿈치를 엉덩이 쪽으로 부드럽게 더 밀어 넣어 허벅지 앞면을 늘려줍니다.",
                  "prt": "대퇴직근 PRT: 앙와위 자세에서 대퇴직근 중앙부의 가장 단단한 띠(Taut band)를 핀치 그립으로 잡습니다. 그 상태에서 트레이너의 무릎으로 회원의 다리를 받치며 고관절을 굴곡시키고 무릎을 완전히 펴서 허벅지 앞면 근육이 가장 느슨해지는 포지션을 찾아 90초 유지합니다."
                },
                "red_flag": "슬개골 부종 및 열감 발생 시 급성 염증 의심.",
                "image_url": "assets/images/leg.png"
              },
              {
                "id": "sub_quad_dominant",
                "title": "대퇴사두근 우세 및 햄스트링 약화",
                "type": "sub_class",
                "clinical_insight": "허벅지 앞쪽(대퇴사두근)이 뒤쪽(햄스트링)보다 비정상적으로 팽팽해져, 슬개골을 위로 강하게 잡아당겨 무릎 굽힘 시 관절면이 강하게 마찰됩니다.",
                "postural_pattern": "Quad Dominant (허벅지 앞쪽 우세 체형) / 골반 전방경사",
                "teaching_cues": {
                  "analogy": "앞쪽 밧줄(앞허벅지)이 너무 질겨져서 무릎 뚜껑 뼈를 위로 꽉 잡아당기니까, 굽힐 때마다 뼈끼리 사포처럼 긁히는 상태입니다.",
                  "movement_cue": "무릎을 앞으로 밀어내며 앉지 말고, 엉덩이로 뒤에 있는 투명 의자를 찾는 느낌으로 먼저 빠져보세요."
                },
                "corrective_exercise": {
                  "step1_mobility": "허벅지 전면부(대퇴직근) 폼롤링 및 장요근 스트레칭",
                  "step2_activation": "스위스볼 햄스트링 컬 (Swiss Ball Hamstring Curl) - 후면 사슬 활성화",
                  "step3_integration": "바벨 힙 스러스트 (Hip Thrust) - 엉덩이/햄스트링 우세 패턴 재교육"
                },
                "contraindications": [
                  "레그 익스텐션 머신 (슬개골 압박 최대로 증가)",
                  "무릎이 발끝을 과도하게 넘어가는 프론트 런지",
                  "내리막길 뛰기"
                ],
                "assessment": {
                  "mrt": "[토마스 변형 평가] 테이블 끝에 걸터앉아 한쪽 무릎을 가슴으로 안고 뒤로 눕습니다. 허공에 떠 있는 반대쪽 다리의 무릎이 90도 이상 굽혀지지 않고 앞을 향해 뻗어져 있다면 대퇴직근의 심각한 과긴장으로 판단합니다.",
                  "mmt_details": [
                    {
                      "muscle": "대퇴직근",
                      "position": "회원은 베드 끝에 앉아 종아리가 아래로 늘어지게 한 후, 무릎을 완전히 폅니다(슬관절 신전).",
                      "fixation": "트레이너는 한 손으로 회원의 허벅지 위쪽을 눌러 몸통이 들썩이지 않게 고정합니다.",
                      "test": "트레이너의 다른 손으로 회원의 발목 앞쪽을 잡고, 무릎을 굽히는(굴곡) 방향으로 서서히 강한 체중을 실어 누릅니다."
                    }
                  ]
                },
                "involved_muscles": [
                  {
                    "name": "대퇴직근 (Rectus Femoris)",
                    "origin": "AIIS",
                    "insertion": "Tibial tuberosity via Patellar tendon",
                    "action": "Hip Flexion, Knee Extension",
                    "type": "Tonic (이완)"
                  },
                  {
                    "name": "햄스트링 (Hamstrings)",
                    "origin": "Ischial tuberosity",
                    "insertion": "Tibia and Fibula",
                    "action": "Hip Extension, Knee Flexion",
                    "type": "Phasic (강화)"
                  }
                ],
                "manual_technique": {
                  "met": "대퇴직근 PIR: 회원을 엎드리게(복와위) 하고 무릎을 엉덩이 쪽으로 굽힙니다. 한계점에 도달하면 회원에게 무릎을 펴려는 힘(20%)을 쓰게 하고 트레이너는 7초간 그 힘을 못 움직이게 막습니다. 이후 회원이 힘을 빼면 트레이너가 발뒤꿈치를 엉덩이 쪽으로 부드럽게 더 밀어 넣어 허벅지 앞면을 늘려줍니다.",
                  "prt": "대퇴직근 PRT: 앙와위 자세에서 대퇴직근 중앙부의 가장 단단한 띠(Taut band)를 핀치 그립으로 잡습니다. 그 상태에서 트레이너의 무릎으로 회원의 다리를 받치며 고관절을 굴곡시키고 무릎을 완전히 펴서 허벅지 앞면 근육이 가장 느슨해지는 포지션을 찾아 90초 유지합니다."
                },
                "red_flag": "슬개골 부종 및 열감 발생 시 급성 염증 의심.",
                "image_url": "assets/images/leg.png"
              }
            ]
          },
          {
            "id": "disease_knee_ankle_limit",
            "title": "원인 B: 발목 기인 (보상작용)",
            "type": "disease",
            "children": [
              {
                "id": "sub_dorsiflexion_limit",
                "title": "발목 배측굴곡 제한",
                "type": "sub_class",
                "clinical_insight": "종아리 근육 단축으로 발목이 위로 잘 꺾이지 않으면, 스쿼트나 계단을 오를 때 무릎이 과도하게 앞으로 밀려 슬개골에 체중 부하가 집중됩니다.",
                "postural_pattern": "O/X다리 동반 발목 뻣뻣함 / 과도한 종아리 긴장형",
                "teaching_cues": {
                  "analogy": "발목 관절에 브레이크가 걸려 있어서 충격 흡수를 못 하니까, 무릎이 대신 그 타격을 다 받고 있는 상황이에요.",
                  "movement_cue": "발뒤꿈치를 바닥에 본드로 붙였다고 상상하고, 정강이만 앞으로 살며시 밀어보세요."
                },
                "corrective_exercise": {
                  "step1_mobility": "하프 닐링 발목 가동성 스트레칭 (Half-kneeling Ankle Dorsiflexion)",
                  "step2_activation": "전경골근 리프트 (Tibialis Raise) - 정강이 앞쪽 근력 활성화",
                  "step3_integration": "뒤꿈치 밑에 원판 깔고 고블렛 스쿼트 (역학적 보상 활용 훈련)"
                },
                "contraindications": [
                  "뒤꿈치가 심하게 들리는 맨몸 딥 스쿼트",
                  "종아리를 폭발적으로 쓰는 줄넘기나 박스 점프"
                ],
                "assessment": {
                  "mrt": "[딥 스쿼트 평가] 회원에게 맨몸으로 쪼그려 앉기를 지시합니다. 발뒤꿈치가 바닥에서 들리거나, 뒤로 넘어질 것 같아 상체가 과도하게 앞으로 숙여진다면 족관절 배측굴곡 제한이 뚜렷한 것입니다.",
                  "mmt_details": [
                    {
                      "muscle": "가자미근",
                      "position": "회원은 엎드린 상태에서 슬관절을 90도 굽혀 종아리를 세웁니다.",
                      "fixation": "트레이너는 한 손으로 회원의 정강이(경골) 뒤쪽을 감싸 안정시킵니다.",
                      "test": "발바닥(종골)을 잡고 발끝을 정강이 쪽으로 밀어내는(배측굴곡) 방향으로 지그시 압력을 가하여 뻣뻣한 저항감이 언제 발생하는지 확인합니다."
                    }
                  ]
                },
                "involved_muscles": [
                  {
                    "name": "가자미근 (Soleus)",
                    "origin": "Posterior tibia & fibula",
                    "insertion": "Calcaneus via Achilles tendon",
                    "action": "Plantar flexion",
                    "type": "Tonic (이완)"
                  }
                ],
                "manual_technique": {
                  "met": "가자미근 PIR: 엎드려 무릎을 90도 굽힌 회원의 발목을 끝까지 젖혀줍니다. 회원은 엑셀을 밟듯 발목을 아래로 내리려(저측굴곡) 하고, 트레이너는 양손으로 발바닥 전체를 감싸 안아 7초간 강하게 버팁니다. 이후 발목을 더욱 젖혀 가동범위를 늘립니다.",
                  "prt": "아킬레스건 주변부 PRT: 엎드린 회원의 아킬레스건 상단(가자미근 근건이행부)을 엄지로 압박한 후, 무릎을 굽히고 발목을 아래로(저측굴곡) 꺾어 근육이 완전히 헐거워지게 만든 상태로 90초 대기합니다."
                },
                "red_flag": "운동 중 아킬레스건 부위의 찌릿함 발생 시 중단.",
                "image_url": "assets/images/leg.png"
              }
            ]
          }
        ]
      },
      {
        "id": "sym_plantar_fasciitis",
        "title": "아침 첫 발 디딜 때 발바닥 통증",
        "type": "symptom_location",
        "children": [
          {
            "id": "disease_calf_tightness",
            "title": "원인 A: 종아리 후면 기인",
            "type": "disease",
            "children": [
              {
                "id": "sub_calf_fascia",
                "title": "비복근 단축에 의한 근막 당김",
                "type": "sub_class",
                "clinical_insight": "발바닥 근막은 아킬레스건을 거쳐 종아리 근육과 하나의 표면후방선(SBL)으로 연결됩니다. 비복근이 단축되면 발바닥까지 과도한 장력이 전달됩니다.",
                "postural_pattern": "Weight Forward (체중 전방 이동) / 하이힐 착용 체형",
                "teaching_cues": {
                  "analogy": "두꺼운 패딩 뒤쪽을 누가 꽉 잡아당기면 앞쪽 지퍼가 조이듯이, 종아리가 뭉치면 발바닥까지 그 줄이 팽팽하게 당겨지는 거예요.",
                  "movement_cue": "종아리에 있는 물풍선을 위아래로 길게 늘어뜨린다는 느낌으로 뒤꿈치를 눌러보세요."
                },
                "corrective_exercise": {
                  "step1_mobility": "벽 밀기 종아리 스트레칭 (Wall Calf Stretch - 무릎 펴고/굽히고 2가지)",
                  "step2_activation": "숏풋 엑서사이즈 (Short Foot Exercise) - 발 내재근 살리기",
                  "step3_integration": "맨발 런지 홀드 (Barefoot Lunge Hold) - 발바닥 아치 버티기"
                },
                "contraindications": [
                  "딱딱한 바닥에서의 맨발 러닝 및 플라이오메트릭 점프",
                  "카프 레이즈 (Calf Raise - 종아리 수축 운동 배제)"
                ],
                "assessment": {
                  "mrt": "[Lunge Test] 회원이 벽을 마주보고 서서 앞발의 발끝을 벽에서 10cm 띄웁니다. 발뒤꿈치를 떼지 않고 무릎을 벽에 닿게 밀어 넣었을 때 뒤꿈치가 들리면 종아리 단축을 시사합니다.",
                  "mmt_details": [
                    {
                      "muscle": "비복근",
                      "position": "회원은 앙와위로 누워 무릎을 완전히 폅니다.",
                      "fixation": "트레이너는 회원의 무릎 바로 위(대퇴 하단)를 눌러 무릎이 굽혀지지 않게 고정합니다.",
                      "test": "트레이너의 배로 회원의 발바닥을 밀며 발목을 최대한 배측굴곡시켜 장딴지에 강한 텐션이나 통증이 재현되는지 확인합니다."
                    }
                  ]
                },
                "involved_muscles": [
                  {
                    "name": "비복근 (Gastrocnemius)",
                    "origin": "Femur medial/lateral condyles",
                    "insertion": "Calcaneus via Achilles tendon",
                    "action": "Plantar flexion, Knee flexion",
                    "type": "Tonic (이완)"
                  }
                ],
                "manual_technique": {
                  "met": "비복근 자가 MET: 회원은 수건을 발바닥(전족부)에 걸고 양손으로 팽팽하게 당깁니다. 7초간 수건을 밀어내는(저측굴곡) 힘을 주고 버틴 후, 숨을 내쉬면서 수건을 더욱 세게 몸 쪽으로 당겨 종아리를 늘립니다.",
                  "prt": "비복근 PRT: 엎드린 회원의 종아리 알(비복근 내/외측두) 중앙의 결절을 컨택하고, 무릎을 90도 굽힌 채 발목을 저측굴곡시켜 가장 텐션이 사라지는 각도를 찾아 90초 유지합니다."
                },
                "red_flag": "발뒤꿈치 뼈(종골) 타진 시 극심한 통증이 있으면 피로골절 우려.",
                "image_url": "assets/images/leg.png"
              }
            ]
          },
          {
            "id": "disease_windlass",
            "title": "원인 B: 엄지발가락 기인",
            "type": "disease",
            "children": [
              {
                "id": "sub_hallux_limit",
                "title": "엄지발가락 신전 제한 (Windlass Failure)",
                "type": "sub_class",
                "clinical_insight": "보행 시 뒤꿈치가 떨어질 때 엄지발가락이 위로 꺾이며 아치를 팽팽하게 감아올려야(Windlass Mechanism) 충격이 흡수되는데, 이 가동성이 떨어지면 발바닥 근막에 과부하가 누적됩니다.",
                "postural_pattern": "Flat Foot (평발) / 무지외반증 동반 패턴",
                "teaching_cues": {
                  "analogy": "지렛대가 부러져서 무거운 물건을 맨손으로 들어야 하는 상황과 같아요. 엄지발가락이 지렛대 역할을 못 하니 근막이 찢어지는 겁니다.",
                  "movement_cue": "엄지발가락만 피아노 건반 누르듯 꾸욱 누르고 나머지 발가락은 들어보세요!"
                },
                "corrective_exercise": {
                  "step1_mobility": "엄지발가락 수동 신전 스트레칭 (손으로 엄지발가락 꺾기)",
                  "step2_activation": "토 요가 (Toe Yoga) - 엄지발가락과 네 발가락 분리 컨트롤 훈련",
                  "step3_integration": "수건 집기 (Towel Curl) 후 카프 레이즈 연결"
                },
                "contraindications": [
                  "엄지발가락 관절에 체중이 다 실리는 푸시업 자세 오래 버티기",
                  "밑창이 너무 얇고 딱딱한 신발(리프팅화) 신고 걷기"
                ],
                "assessment": {
                  "mrt": "[Windlass Test] 회원이 서 있는 상태에서 트레이너가 회원의 엄지발가락을 강하게 위로 젖혀 올립니다(수동 신전). 이때 60도 이상 올라가지 않거나 발바닥 안쪽에 날카로운 통증이 유발되는지 확인합니다.",
                  "mmt_details": [
                    {
                      "muscle": "장무지굴근",
                      "position": "앙와위 자세에서 회원에게 엄지발가락을 밑으로 꽉 구부리게 지시합니다.",
                      "fixation": "트레이너는 회원의 발등과 발목을 안정적으로 고정합니다.",
                      "test": "트레이너는 회원의 엄지발가락을 위로 펴는(신전) 방향으로 힘을 주어 회원의 굴곡 저항력을 체크합니다."
                    }
                  ]
                },
                "involved_muscles": [
                  {
                    "name": "장무지굴근 (Flexor Hallucis Longus)",
                    "origin": "Posterior fibula",
                    "insertion": "Base of distal phalanx of big toe",
                    "action": "Flexes big toe, Plantar flexion",
                    "type": "Tonic (이완)"
                  }
                ],
                "manual_technique": {
                  "met": "엄지발가락 MET: 회원의 엄지발가락을 끝까지 위로 젖혀 텐션을 만듭니다. 회원에게 '엄지발가락으로 제 손가락을 아래로 누르세요'라고 지시하고 7초간 가볍게 저항합니다. 이후 더 위로 젖혀 가동범위를 확장합니다.",
                  "prt": "장무지굴근 PRT: 엎드린 회원의 발바닥 내측 아치와 안쪽 복숭아뼈 뒤쪽 라인을 엄지로 부드럽게 압박합니다. 회원의 발목을 저측굴곡하고 엄지발가락을 끝까지 구부려 조직의 긴장을 없앤 채 90초 대기합니다."
                },
                "red_flag": "무지외반증이 심하게 동반된 경우 무리한 교정 지양.",
                "image_url": "assets/images/leg.png"
              }
            ]
          }
        ]
      },
      {
        "id": "sym_ankle_instability",
        "title": "스쿼트 시 발아치 붕괴 및 잦은 발목 염좌",
        "type": "symptom_location",
        "children": [
          {
            "id": "disease_flat_foot",
            "title": "원인 A: 평발 패턴 기인 (내측 아치 무너짐)",
            "type": "disease",
            "children": [
              {
                "id": "sub_tibialis_post_weak",
                "title": "후경골근 약화 및 비복근 타이트니스",
                "type": "sub_class",
                "clinical_insight": "발바닥 아치를 위로 팽팽하게 끌어올려주는 핵심 코어 근육인 후경골근이 약해지면, 체중을 견디지 못하고 발목이 안쪽으로 무너지면서 무릎까지 안으로 꺾이게(Knee Valgus) 됩니다.",
                "postural_pattern": "Pes Planus (평발) / 과회내(Over-pronation)",
                "teaching_cues": {
                  "analogy": "다리의 텐트 뼈대가 발바닥 아치인데, 기둥이 푹 주저앉으니까 무릎이랑 허리까지 와르르 도미노처럼 흔들리고 있는 거예요.",
                  "movement_cue": "발가락을 움켜쥐지 말고, 발바닥 전체를 바닥에 도장 찍듯 붙인 상태에서 발등만 살짝 위로 들어올려보세요 (Short Foot)."
                },
                "corrective_exercise": {
                  "step1_mobility": "테니스볼 발바닥 릴리즈 및 폼롤러 종아리(비복근) 이완",
                  "step2_activation": "숏풋 엑서사이즈 (Short Foot) 및 밴드를 이용한 발목 내번 훈련",
                  "step3_integration": "루프 밴드를 무릎에 걸고 고블렛 스쿼트 (외전근 및 아치 동시 활성화)"
                },
                "contraindications": [
                  "쿠션이 너무 푹신한 러닝화 신고 중량 스쿼트 치기",
                  "맨발로 딱딱한 바닥에서 줄넘기 장시간 수행"
                ],
                "assessment": {
                  "mrt": "[Navicular Drop Test] 회원이 앉았을 때 주상골(발 안쪽 볼록 튀어나온 뼈)의 높이와, 일어서서 체중을 실었을 때 주상골의 높이 차이를 잽니다. 10mm 이상 주저앉으면 평발 패턴입니다.",
                  "mmt_details": [
                    {
                      "muscle": "후경골근",
                      "position": "회원은 앉거나 앙와위로 누워 발목을 아래로 내리고(저측굴곡) 발바닥을 안쪽으로 틉니다(내번).",
                      "fixation": "트레이너는 회원의 종아리(하퇴)를 흔들리지 않게 꽉 잡습니다.",
                      "test": "회원의 발등 안쪽을 감싸고 발목을 바깥쪽 위(외번 및 배측굴곡) 방향으로 강하게 당기며 버티는 힘을 평가합니다."
                    }
                  ]
                },
                "involved_muscles": [
                  {
                    "name": "후경골근 (Tibialis Posterior)",
                    "origin": "Posterior tibia & fibula",
                    "insertion": "Navicular and medial cuneiform",
                    "action": "Plantar flexion, Inversion (supports arch)",
                    "type": "Phasic (강화/안정화)"
                  },
                  {
                    "name": "비복근 (Gastrocnemius)",
                    "origin": "Femur condyles",
                    "insertion": "Calcaneus",
                    "action": "Plantar flexion",
                    "type": "Tonic (이완)"
                  }
                ],
                "manual_technique": {
                  "met": "후경골근 활성화 등척성 기법: 회원의 발목을 내번(Inversion) 상태로 세팅한 후, 트레이너가 발목을 외번시키려 힘을 줍니다. 회원에게 그 힘에 맞서 10초간 버티게(등척성 수축) 하여 아치를 들어올리는 신경을 깨워줍니다.",
                  "prt": "종아리 심부 PRT: 엎드린 회원의 종아리 안쪽 뼈(경골 내측연)를 따라 깊숙이 손가락을 넣어 뻐근한 텐션을 찾습니다. 발목을 아래로(저측굴곡) 그리고 안으로(내번) 꺾어 가장 편안한 상태를 만들어 90초간 릴리즈합니다."
                },
                "red_flag": "발목에서 체중을 실을 수 없을 정도의 통증 동반 시 피로골절/인대파열 의심.",
                "image_url": "assets/images/leg.png"
              }
            ]
          },
          {
            "id": "disease_chronic_sprain",
            "title": "원인 B: 만성 발목 불안정성 기인",
            "type": "disease",
            "children": [
              {
                "id": "sub_peroneus_weak",
                "title": "비골근 약화 및 고유수용감각 상실",
                "type": "sub_class",
                "clinical_insight": "발목을 바깥으로 삐는(Inversion Sprain) 부상 이후, 발목 바깥쪽에서 브레이크를 잡아주는 비골근이 약해지고 센서(고유수용감각)가 망가져 습관적으로 계속 발목이 꺾이는 상태입니다.",
                "postural_pattern": "Supination (요족) / 발바닥 바깥쪽 체중 지지",
                "teaching_cues": {
                  "analogy": "발목 바깥쪽에 있는 안전벨트가 한 번 끊어진 뒤로 헐거워진 상태입니다. 머리(뇌)에서 발목 위치를 정확하게 인식하는 훈련을 다시 해야 해요.",
                  "movement_cue": "새끼발가락 쪽이 바닥에서 자꾸 뜨지 않게, 엄지와 새끼발가락 양쪽 모두에 똑같이 체중을 실어보세요."
                },
                "corrective_exercise": {
                  "step1_mobility": "발목 배측굴곡 모빌리티 훈련 (Wall Ankle Mobilization)",
                  "step2_activation": "밴드를 이용한 발목 외번(Eversion) 저항 훈련 - 비골근 타겟",
                  "step3_integration": "보수볼(BOSU) 위에서 싱글 레그 스탠드 (고유수용감각 및 밸런스 회복)"
                },
                "contraindications": [
                  "불안정한 지면에서 고중량 바벨 운동",
                  "방향 전환이 급격한 플라이오메트릭 점프 운동"
                ],
                "assessment": {
                  "mrt": "[Single Leg Balance Test] 맨발로 한 발 서기를 지시합니다. 10초 이내에 발목이 심하게 흔들리거나 반대발이 바닥에 닿는다면 고유수용감각(Proprioception)의 심각한 저하 상태입니다.",
                  "mmt_details": [
                    {
                      "muscle": "비골근 (장/단비골근)",
                      "position": "회원은 앉거나 앙와위로 누워 발목을 아래로 내리고(저측굴곡) 발바닥을 바깥쪽으로 틉니다(외번).",
                      "fixation": "트레이너는 종아리 하단을 꽉 잡아 고정합니다.",
                      "test": "회원의 발등 바깥쪽을 감싸고 발목을 안쪽(내번) 방향으로 강하게 당기며 버티는 힘을 평가합니다."
                    }
                  ]
                },
                "involved_muscles": [
                  {
                    "name": "비골근 (Peroneus Longus/Brevis)",
                    "origin": "Lateral fibula",
                    "insertion": "1st metatarsal & medial cuneiform / 5th metatarsal",
                    "action": "Eversion, Plantar flexion",
                    "type": "Phasic (강화/안정화)"
                  }
                ],
                "manual_technique": {
                  "met": "비골근 PIR 및 RI: 발목 바깥쪽 유착을 풀기 위해, 회원의 발목을 내번(안쪽 꺾임)시켜 텐션을 유발합니다. 회원에게 바깥으로 밀어내려는 힘(외번)을 주게 하고 7초간 저항하여 근육을 활성화한 뒤, 다시 내번 방향으로 부드럽게 늘려줍니다.",
                  "prt": "비골근 PRT: 측와위(옆으로 누운 자세)에서 비골(종아리 바깥쪽 뼈) 라인을 따라 단단히 뭉친 부위를 찾습니다. 발목을 외번 및 저측굴곡 시켜 바깥쪽 근막 라인을 헐렁하게 만든 상태로 90초간 유지합니다."
                },
                "red_flag": "발목 바깥쪽 복숭아뼈 주변에 심한 붓기와 피멍이 있으면 급성 파열로 간주.",
                "image_url": "assets/images/leg.png"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "part_neck_shoulder",
    "title": "🧑 목/어깨 (Neck & Shoulder)",
    "type": "body_part",
    "children": [
      {
        "id": "sym_shoulder_impingement",
        "title": "만세/팔 들 때 어깨 앞쪽 찝힘",
        "type": "symptom_location",
        "children": [
          {
            "id": "disease_anterior_glide",
            "title": "원인 A: 역학적 기인 (상완골 전방활주)",
            "type": "disease",
            "children": [
              {
                "id": "sub_humeral_glide",
                "title": "상완골 전방활주 패턴",
                "type": "sub_class",
                "clinical_insight": "후방 관절낭이 단축되거나 가슴근육이 과활성화되면, 팔을 움직일 때 상완골두가 관절와(Socket) 중심을 벗어나 앞쪽으로 밀리면서(전방활주) 어깨 앞쪽 구조물을 강하게 찝게 됩니다.",
                "postural_pattern": "라운드 숄더 (상완골 전방 전위형)",
                "teaching_cues": {
                  "analogy": "문경첩이 헐거워져서 문을 열 때마다 문짝이 문틀에 쿵쿵 부딪히는 것과 같아요. 경첩(어깨 심부근육)을 꽉 조여야 합니다.",
                  "movement_cue": "날개뼈를 조이려고 하지 말고, 겨드랑이 밑에 달걀을 하나 쥐고 있다고 생각하며 가볍게 힘을 줘보세요."
                },
                "corrective_exercise": {
                  "step1_mobility": "Sleeper Stretch (슬리퍼 스트레칭) - 단축된 후방관절낭 유연성 확보",
                  "step2_activation": "짐볼 월 프레스 (Belly Press 변형) - 견갑하근 활성화",
                  "step3_integration": "케틀벨 암바 (Kettlebell Arm-bar) - 능동적 관절 중심화 훈련"
                },
                "contraindications": [
                  "딥스 (Dips - 상완골을 극단적으로 앞으로 밀어냄)",
                  "비하인드 넥 프레스",
                  "바벨 벤치 프레스 (덤벨로 대체하여 가동범위 제한 필요)"
                ],
                "assessment": {
                  "mrt": "[견갑하근 기능 평가 (Belly Press Test)] 회원은 서서 손바닥을 자신의 배꼽 위에 얹고, 팔꿈치를 몸통보다 앞쪽으로 뺍니다.",
                  "mmt_details": [
                    {
                      "muscle": "견갑하근",
                      "position": "배꼽 위에 손바닥을 밀착시킨 자세를 유지합니다.",
                      "fixation": "트레이너는 회원의 어깨 뒤쪽을 손으로 받쳐 보상 작용을 막습니다.",
                      "test": "회원에게 손바닥으로 배를 강하게 누르라고 지시합니다. 이때 팔꿈치가 뒤로 빠지거나, 손바닥 대신 손목이 구부러진다면 견갑하근의 약화 및 기능부전을 의미합니다."
                    }
                  ]
                },
                "involved_muscles": [
                  {
                    "name": "견갑하근 (Subscapularis)",
                    "origin": "Subscapular fossa",
                    "insertion": "Lesser tubercle of humerus",
                    "action": "Internal rotation, stabilizes humeral head",
                    "type": "Phasic (강화/안정화)"
                  },
                  {
                    "name": "후방관절낭 (Posterior Capsule)",
                    "origin": "Posterior glenoid margin",
                    "insertion": "Anatomical neck of humerus",
                    "action": "Joint stabilization",
                    "type": "Tonic (이완)"
                  }
                ],
                "manual_technique": {
                  "met": "전방활주 개선 MET: 앙와위로 눕힌 회원의 어깨 앞에 트레이너의 손바닥(Heel of hand)을 대고, 튀어나온 상완골두를 바닥 쪽(후방)으로 지그시 밀어 넣습니다. 그 상태에서 회원의 팔을 살짝 안으로 돌리는(내회전) 등척성 수축을 유도하여 어깨 심부 안정화 근육을 재교육합니다.",
                  "prt": "상완골 전면 PRT: 앙와위 자세에서 어깨 앞쪽으로 밀려나온 상완골두 주변 압박 부위를 부드럽게 누릅니다. 회원의 팔을 약간 굽혀 몸통에 붙이고 내회전시켜 조직이 가장 편안해지는 각도로 90초 유지합니다."
                },
                "red_flag": "어깨 앞쪽에서 심한 파열음(Pop)이 나면 즉각 중단.",
                "image_url": "assets/images/shoulder.png"
              }
            ]
          },
          {
            "id": "disease_sh_thoracic_chain",
            "title": "원인 B: 흉추-견갑 연쇄 기인 (라운드숄더)",
            "type": "disease",
            "children": [
              {
                "id": "sub_thoracic_pec",
                "title": "흉추 후만 및 소흉근 단축",
                "type": "sub_class",
                "clinical_insight": "라운드숄더는 단순히 어깨만의 문제가 아니라 흉추 가동성 부족(굽은 등)에서 시작되는 경우가 많습니다. 흉추가 굽으면 날개뼈가 앞으로 쏟아지고(전방경사), 이로 인해 가슴 앞쪽 소흉근이 짧아지며 견봉하 공간이 좁아져 충돌을 유발합니다.",
                "postural_pattern": "Upper Crossed Syndrome (상지교차증후군) / 흉추 굽음",
                "teaching_cues": {
                  "analogy": "거북이 등껍질처럼 등이 굽어있으니, 팔을 올리려 해도 지붕(어깨뼈)이 막고 있어서 찌그러지는 거예요. 등(지붕)부터 펴야 팔이 올라갑니다.",
                  "movement_cue": "가슴 한가운데(흉골)에 플래시 라이트가 달려있다고 상상하고, 그 빛으로 천장을 비춰보세요!"
                },
                "corrective_exercise": {
                  "step1_mobility": "폼롤러 흉추 신전 모빌리티 (가슴 펴기)",
                  "step2_activation": "월 엔젤 (Wall Angel) - 흉추 및 견갑골 하방회전근 활성화",
                  "step3_integration": "시티드 케이블 로우 (Seated Cable Row) - 견갑골 모으고 내리기 집중"
                },
                "contraindications": [
                  "무거운 랫풀다운 (흉추가 말린 상태에서 어깨 관절 찝힘 폭발)",
                  "플랭크 파생 운동 (등이 더 말릴 위험이 큼)"
                ],
                "assessment": {
                  "mrt": "[시각적 평가 및 Wall Angel Test] 앙와위로 평평한 바닥에 누웠을 때 어깨 후면이 바닥에서 주먹 하나 들어갈 정도로 붕 떠 있다면 가슴 근육 단축이 뚜렷합니다.",
                  "mmt_details": [
                    {
                      "muscle": "소흉근",
                      "position": "회원은 앙와위로 누워 양팔을 몸통 옆에 편안하게 둡니다.",
                      "fixation": "트레이너는 회원의 늑골 부위를 부드럽게 고정합니다.",
                      "test": "트레이너는 바닥에서 솟아오른 회원의 양쪽 어깨뼈(오훼돌기 부근)에 양 손바닥을 얹고 바닥 쪽으로 지그시 누릅니다. 이때 강한 뻣뻣함이나 텐션이 느껴지면 단축 상태입니다."
                    }
                  ]
                },
                "involved_muscles": [
                  {
                    "name": "소흉근 (Pectoralis Minor)",
                    "origin": "3rd to 5th ribs",
                    "insertion": "Coracoid process of scapula",
                    "action": "Anterior tilt, depression of scapula",
                    "type": "Tonic (이완)"
                  },
                  {
                    "name": "흉추 기립근 (Thoracic Erector Spinae)",
                    "origin": "Thoracic spinous processes",
                    "insertion": "Upper spinous and transverse processes",
                    "action": "Spinal extension",
                    "type": "Phasic (강화)"
                  }
                ],
                "manual_technique": {
                  "met": "소흉근 상호억제 활성화: 회원을 앉히거나 엎드리게 한 후, '날개뼈를 등 중앙으로 꽉 모으세요(견갑골 후인)'라고 지시합니다. 중부/하부 승모근이 능동적으로 10초간 수축하면, 신경학적 반사(상호억제)로 인해 앞쪽의 소흉근이 자연스럽게 이완됩니다. 이 패턴을 5회 반복합니다.",
                  "prt": "소흉근 PRT: 앙와위 자세에서 쇄골 밑 오훼돌기에 부착된 텐션 부위를 손가락으로 가볍게 컨택합니다. 회원의 팔을 대각선 위(가슴 반대편)로 넘겨 가슴 앞쪽 근육을 쭈글쭈글하게 단축시킨 상태로 90초간 인내합니다."
                },
                "red_flag": "팔을 스스로 내리지 못하면 회전근개 손상 우려.",
                "image_url": "assets/images/shoulder.png"
              }
            ]
          }
        ]
      },
      {
        "id": "sym_shoulder_side",
        "title": "팔을 옆으로 들 때 어깨 측면 뻐근함",
        "type": "symptom_location",
        "children": [
          {
            "id": "disease_supraspinatus",
            "title": "원인 A: 회전근개 기인",
            "type": "disease",
            "children": [
              {
                "id": "sub_supra_weak",
                "title": "극상근 기능 저하",
                "type": "sub_class",
                "clinical_insight": "팔을 올리는 초기 30도를 담당하는 극상근이 약해지면 상관골두가 밑으로 안정적으로 당겨지지 않고 위로 치솟아 관절 공간을 좁히게 됩니다.",
                "postural_pattern": "Shoulder Impingement Type (견봉하 공간 협소형)",
                "teaching_cues": {
                  "analogy": "엘리베이터가 올라가려면 밑에서 도르래가 꽉 잡아줘야 흔들리지 않는데, 도르래(극상근)가 풀려서 엘리베이터가 천장에 자꾸 쿵쿵 부딪히는 겁니다.",
                  "movement_cue": "팔을 옆으로 들 때, 손이 올라가는 게 아니라 팔꿈치를 누가 밖에서 실로 잡아당긴다고 생각해보세요."
                },
                "corrective_exercise": {
                  "step1_mobility": "어깨 펜듈럼 운동 (Pendulum Exercise) - 관절 공간 확보 및 혈류량 증가",
                  "step2_activation": "Full Can Exercise (엄지 하늘 방향) - 견갑면 30도 거상 훈련",
                  "step3_integration": "바텀업 케틀벨 프레스 (Bottom-up Kettlebell Press) - 극강의 회전근개 코어 컨트롤"
                },
                "contraindications": [
                  "사이드 레터럴 레이즈 (Side Lateral Raise - 무거운 덤벨 절대 금지)",
                  "엄지가 땅을 향하는 Empty Can 방식의 운동"
                ],
                "assessment": {
                  "mrt": "[Empty Can Test] 양팔을 견갑면(앞으로 30도, 옆으로 90도)으로 뻗고 캔의 물을 쏟듯 엄지를 아래로 돌립니다. 트레이너가 양팔을 아래로 누를 때 버티지 못하고 툭 떨어지는지 확인합니다.",
                  "mmt_details": [
                    {
                      "muscle": "극상근",
                      "position": "앉거나 선 자세에서 팔을 견갑면 각도로 90도 들어 올리고 엄지를 내립니다.",
                      "fixation": "트레이너는 회원의 어깨 바로 위를 눌러 몸통의 보상을 막습니다.",
                      "test": "회원의 전완 하단을 잡고 바닥 쪽으로 지속적인 압박을 주며 회원이 그 위치를 유지하는지(근력 여부) 평가합니다."
                    }
                  ]
                },
                "involved_muscles": [
                  {
                    "name": "극상근 (Supraspinatus)",
                    "origin": "Supraspinous fossa of scapula",
                    "insertion": "Greater tubercle of humerus",
                    "action": "Abduction of humerus",
                    "type": "Phasic (강화/안정화)"
                  }
                ],
                "manual_technique": {
                  "met": "극상근 등척성 컨디셔닝: 회원은 서서 팔을 몸통에 바짝 붙입니다. 트레이너가 회원의 팔꿈치 바깥쪽에 손을 대고 저항을 주는 상태에서, 회원은 팔을 옆으로 벌리려는 힘(10% 미만의 매우 약한 힘)을 줍니다. 어깨 으쓱임 없이 심부 회전근개만 자극합니다.",
                  "prt": "극상근 PRT: 엎드린 회원의 견갑골 상단 극상와 부위에 있는 텐션 부위를 지그시 누릅니다. 회원의 팔을 베드 밖으로 늘어뜨려 90도 벌리고(외전) 천장 쪽으로 돌려(외회전) 근육이 가장 짧아지는 포지션을 90초간 인내합니다."
                },
                "red_flag": "수면을 방해할 정도의 야간통 시 석회성 질환 등 의심.",
                "image_url": "assets/images/shoulder.png"
              }
            ]
          },
          {
            "id": "disease_deltoid_dom",
            "title": "원인 B: 겉근육 기인",
            "type": "disease",
            "children": [
              {
                "id": "sub_deltoid_over",
                "title": "삼각근 우세 패턴",
                "type": "sub_class",
                "clinical_insight": "심부 안정화 근육이 제 역할을 못하는 상태에서 겉근육인 삼각근만 무리하게 힘을 써서 팔꿈치를 위로 끌어올리는(Shrug) 잘못된 보상 패턴입니다.",
                "postural_pattern": "Shrugging Pattern / 상부승모근 과긴장 체형",
                "teaching_cues": {
                  "analogy": "속옷(속근육)은 안 입고 겉옷(삼각근)만 엄청 무겁게 껴입어서, 팔을 움직일 때마다 옷이 위로 말려 올라가는 거랑 같아요.",
                  "movement_cue": "귀랑 어깨가 세상에서 제일 멀어진다고 생각하고 어깨를 끌어내린 상태에서 시작하세요."
                },
                "corrective_exercise": {
                  "step1_mobility": "광배근/삼각근 폼롤링 및 하부승모근 릴리즈",
                  "step2_activation": "Prone Y-Raise - 하부승모근을 깨워 어깨 하방 고정력 세팅",
                  "step3_integration": "케이블 페이스 풀 (Face Pull) - 후면사슬 및 회전근개 통합 훈련"
                },
                "contraindications": [
                  "슈러그 (Shrugs - 상부승모근 타겟 운동)",
                  "고중량 밀리터리 프레스"
                ],
                "assessment": {
                  "mrt": "[어깨 으쓱임(Shrugging) 관찰] 회원에게 양팔을 옆으로 천천히 들어보라고 지시합니다. 팔이 올라가기 전 어깨가 먼저 귀 쪽으로 으쓱 올라간다면 삼각근 및 상부승모근 과사용 패턴입니다.",
                  "mmt_details": [
                    {
                      "muscle": "중삼각근",
                      "position": "회원은 앉아서 팔꿈치를 편 채 팔을 90도 옆으로 들어 올립니다(외전).",
                      "fixation": "트레이너는 반대쪽 어깨를 눌러 체간이 기울어지지 않게 고정합니다.",
                      "test": "회원의 팔꿈치 바로 윗부분(상완 하단)에 손을 얹고 바닥 방향으로 묵직하게 눌러 비정상적인 버티기 반응이 발생하는지 봅니다."
                    }
                  ]
                },
                "involved_muscles": [
                  {
                    "name": "중삼각근 (Middle Deltoid)",
                    "origin": "Acromion of scapula",
                    "insertion": "Deltoid tuberosity of humerus",
                    "action": "Abduction of humerus",
                    "type": "Tonic (이완)"
                  }
                ],
                "manual_technique": {
                  "met": "삼각근 PIR: 앉은 회원의 팔을 몸통 뒤쪽 대각선 아래로(신전 및 내전) 길게 늘어뜨려 어깨 겉근육을 최대로 늘립니다. 회원은 팔을 앞쪽 위로 들어올리려 하고 트레이너는 이를 7초간 막아줍니다. 회원이 힘을 빼면 더 뒤로 당겨 이완합니다.",
                  "prt": "삼각근 PRT: 앙와위 자세에서 어깨 바깥쪽 삼각근 조면을 엄지로 부드럽게 컨택합니다. 회원의 팔을 앞으로 살짝 들어(굴곡) 가슴 쪽으로 당긴(내전) 채 90초 대기하여 근육 긴장도를 떨어뜨립니다."
                },
                "red_flag": "어깨 탈구 병력 주의.",
                "image_url": "assets/images/shoulder.png"
              }
            ]
          }
        ]
      },
      {
        "id": "sym_neck_headache_multi",
        "title": "뒷목 뻣뻣함 및 피로감",
        "type": "symptom_location",
        "children": [
          {
            "id": "disease_neck_local",
            "title": "원인 A: 거북목 체형 기인",
            "type": "disease",
            "children": [
              {
                "id": "sub_fhp_local",
                "title": "후두하근 및 목 후면부 긴장",
                "type": "sub_class",
                "clinical_insight": "머리가 앞으로 빠지며 시선을 정면으로 유지하기 위해 뒷목 근육(후두하근)이 꺾인 채 굳어져 뇌로 가는 혈류를 방해하고 피로감을 유발합니다.",
                "postural_pattern": "Forward Head Posture (거북목) / 일자목",
                "teaching_cues": {
                  "analogy": "머리가 5kg짜리 수박인데, 목 뼈 중심에서 1cm 앞으로 빠질 때마다 체감 무게가 2배씩 늘어나요. 뒷목 근육이 매일 수박을 들고 벌을 서고 있는 거예요.",
                  "movement_cue": "턱을 무작정 당기지 말고, 정수리에서 누가 실로 하늘로 쭉 잡아당겨서 키가 커진다고 생각하세요!"
                },
                "corrective_exercise": {
                  "step1_mobility": "땅콩볼 후두하근 릴리즈 및 흉쇄유돌근 스트레칭",
                  "step2_activation": "친인 (Chin-in) + 경추 심부 굴곡근 등척성 운동 (수건 누르기)",
                  "step3_integration": "쿼드루페드(네발기기) 자세에서 뒷통수로 천장 밀어내기 버티기"
                },
                "contraindications": [
                  "핸드폰이나 모니터를 바닥/아래쪽으로 내려다보는 자세 금지",
                  "목 뒤로 과도하게 젖히며 돌리는 넥 서클(Neck Circle)"
                ],
                "assessment": {
                  "mrt": "[턱 당기기(Chin-in) 가동성 평가] 회원을 앙와위로 눕히고 뒤통수가 바닥에 닿은 상태에서 턱만 가슴 쪽으로 당겨 뒷목이 길어지게 해보라고 지시합니다. 이때 고개가 바닥에서 붕 뜨거나 턱이 전혀 내려가지 않는다면 후두하근의 강한 단축입니다.",
                  "mmt_details": [
                    {
                      "muscle": "후두하근",
                      "position": "회원은 엎드린 상태(복와위)에서 고개를 베개 밖으로 빼고 이중 턱(Chin-in) 자세를 단단히 세팅합니다.",
                      "fixation": "트레이너는 한 손으로 회원의 뒤통수 아래(후두골)를 가볍게 감싸 고정합니다.",
                      "test": "트레이너의 다른 손을 회원의 이마에 대고 바닥을 향해 누르며, 회원이 턱 당김을 풀지 않고 자세를 사수하는지 확인합니다."
                    }
                  ]
                },
                "involved_muscles": [
                  {
                    "name": "후두하근 (Suboccipitalis)",
                    "origin": "C1 and C2 vertebrae",
                    "insertion": "Occipital bone",
                    "action": "Head extension, lateral flexion",
                    "type": "Tonic (이완)"
                  }
                ],
                "manual_technique": {
                  "met": "안구 움직임을 이용한 목 릴리즈: 앙와위로 누운 회원에게 눈동자를 천장 위쪽으로 치켜뜨게 지시합니다. 이때 회원이 고개를 아주 미세하게(5% 힘) 뒤로 젖히려 하면 트레이너는 손으로 이를 막아줍니다. 7초 뒤 회원이 눈을 발끝 방향으로 내리깔게 하고 턱을 당겨 뒷목을 이완합니다.",
                  "prt": "후두하근 PRT: 앙와위 자세에서 베드 끝에 선 트레이너는 양손의 2~3번째 손가락 패드를 회원의 두개골 바로 아래(후두하 공간)에 밀어 넣습니다. 머리의 무게를 온전히 손가락으로 떠받친 채, 회원의 고개를 살짝 뒤로 젖혀 근막이 젤리처럼 부드럽게 될 때까지 90초 이상 대기합니다."
                },
                "red_flag": "운동 중 지속적인 어지럼증 동반 시 혈압 및 혈관 이슈 체크.",
                "image_url": "assets/images/neck.png"
              }
            ]
          },
          {
            "id": "disease_neck_respiratory",
            "title": "원인 B: 얕은 호흡 패턴 기인",
            "type": "disease",
            "children": [
              {
                "id": "sub_scalene_apical",
                "title": "목 앞쪽 근육 과활성화 및 흉식 호흡",
                "type": "sub_class",
                "clinical_insight": "코어 근육과 횡격막 대신 목 앞쪽 근육(사각근)으로 얕은 가슴 호흡을 반복하면, 숨을 쉴 때마다 목 근육이 혹사당하여 만성적인 뻣뻣함을 유발합니다.",
                "postural_pattern": "Apical Breathing Pattern / 들숨 우세 체형",
                "teaching_cues": {
                  "analogy": "폐(풍선)를 아래(배)로 부풀려야 하는데, 코르셋을 꽉 조인 것처럼 배가 굳어 있어서 어깨와 목을 들썩이며 억지로 숨을 쉬고 있는 거예요.",
                  "movement_cue": "숨을 마실 때 어깨가 귀랑 가까워지면 안 돼요. 갈비뼈를 양옆으로 아코디언처럼 늘려보세요!"
                },
                "corrective_exercise": {
                  "step1_mobility": "가슴 앞쪽(대흉근/소흉근) 및 사각근 릴리즈 스트레칭",
                  "step2_activation": "크로커다일 브리딩 (Crocodile Breathing) - 엎드린 상태에서 횡격막 호흡 인지",
                  "step3_integration": "데드버그 (Dead bug) 수행 중 코어 압력 및 정상 호흡 유지 훈련"
                },
                "contraindications": [
                  "어깨가 으쓱 올라가는 흉식 호흡 습관",
                  "벨트를 너무 꽉 조이고 하는 고중량 리프팅"
                ],
                "assessment": {
                  "mrt": "[호흡 패턴 시각적 관찰 (Hi-Lo Test)] 회원에게 한 손은 가슴에, 한 손은 복부에 얹게 하고 평소처럼 편안하게 호흡하게 합니다. 복부의 손은 가만히 있고 가슴의 손만 위아래로 심하게 움직인다면 잘못된 호흡 보상 패턴입니다.",
                  "mmt_details": [
                    {
                      "muscle": "사각근",
                      "position": "회원은 앙와위로 누워 턱을 당긴 채 고개를 앞쪽 대각선(굴곡+측굴)으로 살짝 들어 올립니다.",
                      "fixation": "트레이너는 반대쪽 어깨를 눌러 상체가 뜨지 않게 고정합니다.",
                      "test": "트레이너가 회원의 이마 측면에 손을 대고 바닥 대각선 방향으로 눌러 목 앞쪽 근육이 버티는 힘을 평가합니다."
                    }
                  ]
                },
                "involved_muscles": [
                  {
                    "name": "사각근 (Scalenes)",
                    "origin": "Transverse processes of C2-C7",
                    "insertion": "1st and 2nd ribs",
                    "action": "Elevates ribs (inspiration), lateral flexion of neck",
                    "type": "Tonic (이완)"
                  }
                ],
                "manual_technique": {
                  "met": "사각근 릴리즈 및 호흡 인지: 회원을 앙와위로 눕히고 쇄골에 트레이너의 손바닥을 얹어 아래로 지그시 누릅니다. 회원이 숨을 깊게 들이마실 때 어깨가 위로 들리려 하는 보상 작용을 트레이너가 차단합니다. 숨을 뱉을 때 회원의 고개를 반대편 대각선 뒤로 젖혀 목 앞쪽을 길게 늘려줍니다.",
                  "prt": "사각근 PRT: 앙와위 자세에서 목 빗근(흉쇄유돌근) 바로 뒤쪽으로 손가락을 가볍게 컨택합니다. 회원의 고개를 타겟 근육 방향으로 돌리고(회전) 눕혀서(측굴) 근막 텐션이 가장 편안해지는 위치를 찾아 90초간 이완합니다."
                },
                "red_flag": "팔 끝까지 찌릿한 느낌이 심해지면 신경 눌림(흉곽출구증후군) 의심.",
                "image_url": "assets/images/neck.png"
              }
            ]
          }
        ]
      },
      {
        "id": "sym_winging_scapula",
        "title": "푸시업 자세에서 날개뼈가 등 뒤로 붕 뜸 (익상견갑)",
        "type": "symptom_location",
        "children": [
          {
            "id": "disease_scapular_dyskinesis",
            "title": "원인 A: 견갑 흉곽 관절 안정성 결여",
            "type": "disease",
            "children": [
              {
                "id": "sub_serratus_weakness",
                "title": "전거근 약화 및 소흉근 단축 (Winging Scapula)",
                "type": "sub_class",
                "clinical_insight": "날개뼈를 갈비뼈(흉곽)에 찰싹 달라붙게 고정해 주는 전거근이 마비되듯 약해지면, 앞쪽의 소흉근이 날개뼈를 앞으로 기울게 만들어 날개뼈 하각(아래쪽)이 등 뒤로 툭 튀어나오는 익상견갑이 발생합니다. 이는 모든 상체 운동 부상의 시작점입니다.",
                "postural_pattern": "Winging Scapula (익상견갑) / 굽은 등",
                "teaching_cues": {
                  "analogy": "벽에 붙어있어야 할 포스트잇(날개뼈)이 접착력을 잃고 덜렁덜렁 떨어지려 하는 상태입니다. 접착제(전거근)를 다시 발라줘야 무거운 걸 들어도 어깨가 안 다칩니다.",
                  "movement_cue": "날개뼈를 억지로 등 뒤로 모으려 하지 말고, 겨드랑이 아래쪽 근육을 써서 날개뼈를 몸통(갈비뼈) 옆면으로 부드럽게 랩핑하듯 감싸보세요."
                },
                "corrective_exercise": {
                  "step1_mobility": "소흉근 릴리즈 및 흉추 신전 스트레칭 (가동성 회복)",
                  "step2_activation": "베어 크롤 (Bear Crawl) 홀딩 - 바닥을 강하게 밀어내며 전거근 인지",
                  "step3_integration": "케틀벨 암바 (Arm-bar) 또는 바텀업 겟업 - 날개뼈 3D 안정화 훈련"
                },
                "contraindications": [
                  "무거운 바벨 벤치프레스 (견갑 고정이 안 되어 어깨 작살남)",
                  "덤벨 숄더 프레스 (상방회전 불가로 충돌증후군 유발)"
                ],
                "assessment": {
                  "mrt": "[Wall Push-up Test] 회원에게 벽을 짚고 푸시업을 지시합니다. 팔을 뻗어 벽을 밀어낼 때 날개뼈 안쪽 모서리(내측연)가 등 뒤로 손가락이 쑥 들어갈 정도로 들린다면 전거근 약화(Winging) 양성입니다.",
                  "mmt_details": [
                    {
                      "muscle": "전거근",
                      "position": "앙와위로 누워 팔을 천장 방향으로 90도 뻗고 주먹을 쥡니다.",
                      "fixation": "어깨가 바닥에서 떨어지도록 팔을 위로 밀어올리게(Protraction) 합니다.",
                      "test": "트레이너가 회원의 주먹을 바닥 쪽으로 체중을 실어 누르며 날개뼈가 바닥으로 무너지는지 버티는 힘을 평가합니다."
                    }
                  ]
                },
                "involved_muscles": [
                  {
                    "name": "전거근 (Serratus Anterior)",
                    "origin": "Outer surfaces of upper 8-9 ribs",
                    "insertion": "Medial border of scapula",
                    "action": "Scapular protraction, Upward rotation",
                    "type": "Phasic (강화/활성화 필수)"
                  },
                  {
                    "name": "소흉근 (Pectoralis Minor)",
                    "origin": "3rd to 5th ribs",
                    "insertion": "Coracoid process of scapula",
                    "action": "Anterior tilt of scapula",
                    "type": "Tonic (이완)"
                  }
                ],
                "manual_technique": {
                  "met": "소흉근 릴리즈 기법: 앙와위로 누운 회원의 어깨(오훼돌기)를 바닥 쪽으로 부드럽게 누릅니다. 회원에게 어깨를 천장 쪽으로 으쓱 들어올리려는 힘을 가볍게 쓰게 하고 방어한 뒤, 릴리즈 시 어깨를 바닥으로 더 눕혀 소흉근을 엽니다.",
                  "prt": "견갑하근/소흉근 PRT: 앙와위 자세에서 회원의 팔을 가슴 위 대각선 반대편으로 가볍게 넘겨 앞쪽 텐션을 줄인 상태에서 쇄골 밑 소흉근 포인트를 가볍게 터치하고 90초간 호흡을 유도합니다."
                },
                "red_flag": "장흉신경(Long Thoracic Nerve) 마비 시 심각한 익상견갑이 나타나며 이는 트레이닝으로 해결 불가(병원 정밀검사).",
                "image_url": "assets/images/shoulder.png"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "part_lumbar_pelvis",
    "title": "🦴 허리/골반 (Lumbar & Pelvis)",
    "type": "body_part",
    "children": [
      {
        "id": "sym_lumbar_flexion_pain",
        "title": "허리 숙일 때 뻐근함 및 가동 범위 제한",
        "type": "symptom_location",
        "children": [
          {
            "id": "disease_lumbar_hamstring",
            "title": "원인 A: 하체 후면 기인 (골반 리듬 깨짐)",
            "type": "disease",
            "children": [
              {
                "id": "sub_hamstring_short",
                "title": "햄스트링 타이트니스",
                "type": "sub_class",
                "clinical_insight": "허벅지 뒤쪽(햄스트링)이 뻣뻣하여 상체를 숙일 때 골반이 함께 넘어가주지 못하면, 요추(허리뼈)만 억지로 둥글게 말리면서 허리에 과부하가 걸리게 됩니다.",
                "postural_pattern": "Posterior Pelvic Tilt (골반 후방경사) / 일자 허리",
                "teaching_cues": {
                  "analogy": "바지를 입을 때 뒤쪽 주머니가 밑으로 꽉 당겨져 있으면 허리를 숙이기 힘든 것처럼, 허벅지 뒤쪽 근육이 골반을 아래로 꽉 잡고 안 놔주고 있는 겁니다.",
                  "movement_cue": "인사하듯 허리를 숙일 때, 꼬리뼈를 천장 쪽으로 치켜올린다는 느낌을 먼저 줘보세요."
                },
                "corrective_exercise": {
                  "step1_mobility": "햄스트링 액티브 아이솔레이션 스트레칭 (수건 걸고 다리 당기기)",
                  "step2_activation": "짐볼 브릿지 (Swiss Ball Bridge) - 햄스트링 수축 및 이완 조절 훈련",
                  "step3_integration": "루마니안 데드리프트 (RDL) 빈 바벨 연습 - 완벽한 골반 리듬 학습"
                },
                "contraindications": [
                  "무릎을 다 편 상태에서 억지로 바닥 터치하는 스트레칭",
                  "레그 컬(Leg Curl) 머신 고중량 사용"
                ],
                "assessment": {
                  "mrt": "[하지직거상(SLR) 능동 평가] 회원 스스로 무릎을 편 채로 다리를 들어보게 합니다. 60도 이하에서 허벅지 뒤쪽이 심하게 당기거나 허리가 바닥으로 강하게 짓눌리면 햄스트링 유연성 부족을 시사합니다.",
                  "mmt_details": [
                    {
                      "muscle": "햄스트링",
                      "position": "회원은 엎드린 상태(복와위)에서 한쪽 무릎을 90도 굽힙니다.",
                      "fixation": "트레이너는 회원의 골반 후면(천골 부위)을 눌러 고정합니다.",
                      "test": "트레이너가 회원의 발목을 잡고 바닥 쪽(슬관절 신전 방향)으로 눌러 내리며 회원의 무릎 굽히는 힘에 대한 버티기 능력을 측정합니다."
                    }
                  ]
                },
                "involved_muscles": [
                  {
                    "name": "햄스트링 (Hamstrings)",
                    "origin": "Ischial tuberosity",
                    "insertion": "Tibia and Fibula",
                    "action": "Hip extension, Knee flexion",
                    "type": "Tonic (이완)"
                  }
                ],
                "manual_technique": {
                  "met": "햄스트링 PIR: 회원을 앙와위로 눕히고 다리를 뻗은 채 위로 들어올립니다(수동 SLR). 저항감이 느껴지는 한계점에서 멈추고, 회원에게 발뒤꿈치로 트레이너의 어깨를 20% 힘으로 누르라고 지시합니다. 7초 유지 후 힘을 빼게 하고, 다리를 가슴 쪽으로 더 밀어 올려 후면 사슬을 깊게 엽니다.",
                  "prt": "햄스트링 PRT: 엎드린 자세에서 회원의 오금 바로 위쪽 허벅지 뒤편(슬와부)의 단단해진 부위를 지그시 누릅니다. 회원의 무릎을 편안한 각도로 구부리게 하여 손끝에 느껴지는 근육의 긴장감이 완전히 해소되는 위치를 찾아 90초간 홀드합니다."
                },
                "red_flag": "SLR 시 허벅지 뒤가 아닌 허리 중앙이 심하게 아프다면 요추부 안정화부터 선행.",
                "image_url": "assets/images/leg.png"
              }
            ]
          },
          {
            "id": "disease_lumbar_psoas",
            "title": "원인 B: 코어 심부 기인 (골반 전방 락킹)",
            "type": "disease",
            "children": [
              {
                "id": "sub_psoas_locking",
                "title": "장요근 단축 (골반 전방경사 고착)",
                "type": "sub_class",
                "clinical_insight": "오랜 좌식 생활로 코어 앞쪽의 장요근이 짧아져 골반을 앞으로 꽉 잡고 있으면(전방경사), 허리를 뒤로 빼거나 숙이려는 동작 자체가 방해를 받습니다.",
                "postural_pattern": "Anterior Pelvic Tilt (골반 전방경사) / 오리궁둥이 체형",
                "teaching_cues": {
                  "analogy": "바지 앞 주머니 쪽 고무줄이 너무 짧게 묶여 있어서, 허리를 숙이려고 하면 앞에서 꽉 막혀버리는 현상입니다.",
                  "movement_cue": "배꼽을 명치 쪽으로 끌어당겨서 허리 뒤쪽을 바닥에 납작하게 붙여보세요."
                },
                "corrective_exercise": {
                  "step1_mobility": "하프 닐링 장요근 스트레칭 (Half-kneeling Hip Flexor Stretch)",
                  "step2_activation": "데드버그 (Dead Bug) 및 골반 후방경사(PPT) 인지 훈련",
                  "step3_integration": "플랭크 (Plank) 상태에서 복부 및 둔근 강한 수축 버티기"
                },
                "contraindications": [
                  "레그 레이즈 (Leg Raise - 허리가 뜨면 장요근만 혹사당함)",
                  "과도한 코브라 자세 스트레칭"
                ],
                "assessment": {
                  "mrt": "[토마스 기능 평가] 회원이 베드 끝에 앉아 한쪽 무릎을 가슴 깊숙이 안고 천천히 뒤로 눕게 유도합니다.",
                  "mmt_details": [
                    {
                      "muscle": "장요근",
                      "position": "회원은 앉은 자세 또는 앙와위에서 고관절을 100도 이상 깊게 굴곡하여 다리를 가슴 쪽으로 당깁니다.",
                      "fixation": "반대쪽 다리가 뜨지 않게 폼롤러 등으로 누르거나 골반의 중립을 세팅합니다.",
                      "test": "트레이너가 회원의 무릎 바로 위(대퇴 하부)를 바닥 쪽(신전 방향)으로 누르며 코어 심부 근육의 활성도를 평가합니다."
                    }
                  ]
                },
                "involved_muscles": [
                  {
                    "name": "장요근 (Iliopsoas)",
                    "origin": "T12-L5 vertebrae, Iliac fossa",
                    "insertion": "Lesser trochanter of femur",
                    "action": "Hip flexion",
                    "type": "Tonic (이완)"
                  }
                ],
                "manual_technique": {
                  "met": "장요근 능동 릴리즈: 회원이 토마스 평가 자세로 누운 상태에서, 베드 밖으로 떨어뜨린 다리를 천장 위로 들어올리게(고관절 굴곡) 지시합니다. 트레이너가 그 힘을 7초간 버티고 난 뒤, 회원이 힘을 풀면 다리를 바닥 쪽으로 천천히 더 지그시 눌러 장요근을 이완합니다.",
                  "prt": "장요근 PRT: 앙와위 자세에서 회원의 무릎을 굽혀 세웁니다. 골반 앞 뼈(ASIS)와 배꼽 사이 중간 지점에서 심부 장요근 텐션을 찾아 엄지로 부드럽게 컨택합니다. 컨택을 유지한 채 회원의 다리를 가슴 쪽으로 바짝 굽혀 복부를 헐렁하게 만들어 90초간 이완 사이클을 기다립니다."
                },
                "red_flag": "복부 컨택 시 비정상적으로 강한 맥박이 느껴지면 압박 금지.",
                "image_url": "assets/images/lumbar.png"
              }
            ]
          }
        ]
      },
      {
        "id": "sym_lumbar_extension_pain",
        "title": "허리 젖힐 때 / 기립 자세 유지 시 피로감",
        "type": "symptom_location",
        "children": [
          {
            "id": "disease_facet_joint",
            "title": "원인 A: 후면 사슬 불균형",
            "type": "disease",
            "children": [
              {
                "id": "sub_lumbar_hyper",
                "title": "기립근 과긴장 및 둔근 활성화 부족",
                "type": "sub_class",
                "clinical_insight": "가장 큰 엔진인 엉덩이(대둔근)가 스위치 오프 되어 있으면, 그 위의 얇은 허리 근육(기립근)이 무리하게 상체를 받치느라 허리 관절이 짓눌리는 보상 작용이 일어납니다.",
                "postural_pattern": "Gluteal Amnesia (엉덩이 기억상실증) / 하이퍼로도시스",
                "teaching_cues": {
                  "analogy": "대기업(엉덩이)이 일을 안 하니까 중소기업(허리)이 매일 야근하다가 결국 과로로 쓰러지기 일보 직전인 상태예요. 대기업을 깨워야 합니다.",
                  "movement_cue": "허리를 꺾어서 다리를 들지 말고, 엉덩이에 동전을 꽉 끼운다고 생각하고 힘을 먼저 주세요."
                },
                "corrective_exercise": {
                  "step1_mobility": "고양이-소 자세 (Cat-Cow) 및 폼롤러 요추 릴리즈",
                  "step2_activation": "글루트 브릿지 (Glute Bridge) - 허리 꺾임 없이 엉덩이만 수축",
                  "step3_integration": "케틀벨 스윙 (Kettlebell Swing) - 후면 사슬 폭발적 통합 (초보자 주의)"
                },
                "contraindications": [
                  "백 익스텐션 머신 (Back Extension - 기립근만 타겟 시 독이 됨)",
                  "슈퍼맨 자세 (허리 과도한 신전)"
                ],
                "assessment": {
                  "mrt": "[Prone Hip Extension 패턴 평가] 엎드린 회원에게 다리를 뒤로 들어올리게 지시합니다. 대둔근보다 기립근이나 햄스트링이 먼저 강하게 수축한다면 비효율적인 후면 사슬 동원 패턴입니다.",
                  "mmt_details": [
                    {
                      "muscle": "대둔근",
                      "position": "엎드린 자세(복와위)에서 무릎을 90도 굽힌 상태로 허벅지를 천장 방향으로 들어 올립니다(고관절 신전).",
                      "fixation": "트레이너는 한 손으로 회원의 요추부를 덮어 허리가 보상 작용으로 꺾이지 않게 방어합니다.",
                      "test": "트레이너의 다른 손으로 회원의 허벅지 뒤쪽을 아래로 누르며 엉덩이 근육만의 순수한 동원 능력을 체크합니다."
                    }
                  ]
                },
                "involved_muscles": [
                  {
                    "name": "기립근 (Erector Spinae)",
                    "origin": "Sacrum, Iliac crest, Lumbar vertebrae",
                    "insertion": "Ribs, Cervical/Thoracic vertebrae",
                    "action": "Spinal extension",
                    "type": "Tonic (이완)"
                  },
                  {
                    "name": "대둔근 (Gluteus Maximus)",
                    "origin": "Posterior ilium, Sacrum",
                    "insertion": "Gluteal tuberosity, IT tract",
                    "action": "Hip extension",
                    "type": "Phasic (강화/활성화)"
                  }
                ],
                "manual_technique": {
                  "met": "요부 기립근 PIR: 회원은 베드에 앉은 자세에서 상체를 둥글게 말고(굴곡), 트레이너는 등 뒤에 위치합니다. 회원에게 허리를 꼿꼿이 세워 펴라고 지시하고, 트레이너는 양손으로 회원의 양어깨를 눌러 7초간 방어합니다. 힘을 뺀 뒤 상체를 더 깊숙이 말아 기립근의 텐션을 해소합니다.",
                  "prt": "요부 기립근 PRT: 엎드린 회원의 허리에서 가장 단단하게 뭉친 기립근 포인트를 컨택합니다. 회원의 다리를 살짝 들어 올리거나 골반 밑에 쿠션을 대어(고관절 신전 셋업) 허리 근육이 살짝 느슨해지는 각도를 확보한 뒤 90초간 텐션 감소를 유도합니다."
                },
                "red_flag": "운동 시 다리로 뻗치는 저림 발생 시 척추관 이슈 확인 필요.",
                "image_url": "assets/images/lumbar.png"
              }
            ]
          }
        ]
      },
      {
        "id": "sym_sciatica",
        "title": "엉덩이 깊은 곳부터 다리까지의 뻐근한 저림",
        "type": "symptom_location",
        "children": [
          {
            "id": "disease_piriformis",
            "title": "원인 A: 고관절 심부 기인",
            "type": "disease",
            "children": [
              {
                "id": "sub_piri_spasm",
                "title": "이상근 타이트니스 (가짜 좌골신경통)",
                "type": "sub_class",
                "clinical_insight": "골반 안쪽 깊은 곳에 있는 이상근이 타이트해져서 부풀어 오르면, 그 근처를 지나가는 좌골신경을 눌러 다리가 저린 듯한 불편함을 유발합니다.",
                "postural_pattern": "팔자걸음 체형 / 고관절 외회전 고착",
                "teaching_cues": {
                  "analogy": "호스(신경) 위를 무거운 돌덩이(이상근)가 누르고 있어서 물(감각)이 잘 안 통하는 거예요. 돌덩이를 치워주면 싹 가라앉습니다.",
                  "movement_cue": "다리를 꼬는 자세(4자 다리)를 만들고 엉덩이 깊숙한 곳이 뻐근해질 때까지만 당겨주세요."
                },
                "corrective_exercise": {
                  "step1_mobility": "피존 포즈 스트레칭 (Pigeon Pose) 또는 좌식 4자 다리 스트레칭",
                  "step2_activation": "사이드 라이잉 내회전 훈련 - 이상근의 길항근 활성화",
                  "step3_integration": "스플릿 스쿼트 (Split Squat) - 골반의 좌우 중립 정렬 잡기"
                },
                "contraindications": [
                  "과도한 와이드 스쿼트 (이상근 긴장 유발)",
                  "다리 꼬고 장시간 앉아있기"
                ],
                "assessment": {
                  "mrt": "[FAIR 움직임 검사] 측와위(불편한 쪽이 위)에서 고관절을 60도 굽히고(Flexion), 내전(Adduction) 및 내회전(Internal Rotation) 시켰을 때 엉덩이 깊은 곳에 찌릿한 텐션이 재현되는지 봅니다.",
                  "mmt_details": [
                    {
                      "muscle": "이상근",
                      "position": "엎드린 자세(복와위)에서 무릎을 90도 굽히고 발을 바깥쪽으로 벌려 눕힙니다(고관절 내회전 유도 자세).",
                      "fixation": "트레이너는 회원의 골반이 들리지 않게 반대편 골반을 강하게 픽스합니다.",
                      "test": "트레이너가 회원의 발목 안쪽을 바깥으로 밀며 이상근의 외회전 버티기 능력을 테스트하고 뻐근함 발생 여부를 확인합니다."
                    }
                  ]
                },
                "involved_muscles": [
                  {
                    "name": "이상근 (Piriformis)",
                    "origin": "Anterior sacrum",
                    "insertion": "Greater trochanter of femur",
                    "action": "External rotation of hip",
                    "type": "Tonic (이완)"
                  }
                ],
                "manual_technique": {
                  "met": "이상근 컨디셔닝: 앙와위로 누운 회원의 무릎을 굽히고 다리를 반대편 가슴 쪽 대각선으로 깊게 넘깁니다. 회원에게 무릎을 바깥으로 벌리려는 힘을 7초간 주게 한 후 방어하고, 힘을 뺄 때 다리를 몸통 대각선 쪽으로 더 당겨 이상근의 길이를 확보합니다.",
                  "prt": "이상근 PRT: 엎드린 회원의 엉덩이 한가운데 가장 깊숙하고 뻐근한 텐션 부위를 엄지 또는 팔꿈치로 지그시 컨택합니다. 회원의 다리를 베드 바깥쪽으로 떨어뜨려(외전 및 외회전 유도) 이상근을 가장 짧고 편안하게 셋업한 상태로 90초 유지합니다."
                },
                "red_flag": "발가락 폄/굽힘 근력 저하가 동반된다면 디스크 관련 정밀 체크가 우선.",
                "image_url": "assets/images/lumbar.png"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "part_thoracic_back",
    "title": "🩻 흉추/코어 (Thoracic & Core)",
    "type": "body_part",
    "children": [
      {
        "id": "sym_interscapular_pain",
        "title": "날개뼈 사이 뻐근함 및 늘어나는 통증",
        "type": "symptom_location",
        "children": [
          {
            "id": "disease_upper_crossed",
            "title": "원인 A: 상지교차 체형 패턴 기인",
            "type": "disease",
            "children": [
              {
                "id": "sub_pec_major_tight",
                "title": "가슴 근육 단축 및 등 근육 이완성 약화",
                "type": "sub_class",
                "clinical_insight": "가슴 앞쪽 근육(대흉근)이 우세해져 짧아지면 날개뼈 사이 근육(능형근)을 계속 잡아끌어 팽팽한 고무줄처럼 늘어지게 만듭니다. 늘어난 상태로 굳어 발생하는 이완성 긴장입니다.",
                "postural_pattern": "Upper Crossed Syndrome (상지교차증후군) / 둥근 어깨",
                "teaching_cues": {
                  "analogy": "앞쪽에서 고무줄(가슴)을 꽉 잡아당기고 있으니까 등쪽 고무줄(능형근)이 억지로 팽팽해져서 비명을 지르는 중이에요. 등을 주무를 게 아니라 가슴을 풀어야 합니다.",
                  "movement_cue": "어깨를 뒤로 모으는 게 아니라, 가슴 한가운데 뼈를 하늘로 살짝 들어올린다고 생각하세요."
                },
                "corrective_exercise": {
                  "step1_mobility": "문틀 대흉근 스트레칭 (Doorway Pectoral Stretch)",
                  "step2_activation": "Prone T-Raise - 능형근 및 중부승모근 등척성 수축",
                  "step3_integration": "TRX 로우 (TRX Row) - 흉추 신전과 함께 견갑골 후인 통합"
                },
                "contraindications": [
                  "푸시업(Push-up)이나 벤치프레스 과다 수행",
                  "스마트폰 장시간 보기"
                ],
                "assessment": {
                  "mrt": "[가슴 근육 유연성 시각 평가] 앙와위로 누워 깍지를 끼고 머리 위로 손을 올렸을 때 팔꿈치가 바닥에 닿지 않거나 어깨 앞쪽이 강하게 뜰 경우 전면부 텐션 과다를 의미합니다.",
                  "mmt_details": [
                    {
                      "muscle": "능형근",
                      "position": "엎드려(또는 앉아서) 팔을 등 뒤쪽으로 당기며 날개뼈를 척추 쪽으로 강하게 모읍니다(후인 셋업).",
                      "fixation": "트레이너는 회원의 몸통 앞쪽(가슴)을 밀착시켜 상체가 딸려가지 않게 안정화합니다.",
                      "test": "트레이너가 회원의 팔꿈치를 앞쪽 방향(외전 및 전인)으로 지그시 당겨 능형근이 제 위치를 버티는지 평가합니다."
                    }
                  ]
                },
                "involved_muscles": [
                  {
                    "name": "대흉근 (Pectoralis Major)",
                    "origin": "Clavicle, Sternum",
                    "insertion": "Greater tubercle of humerus",
                    "action": "Adduction, Internal rotation",
                    "type": "Tonic (이완)"
                  },
                  {
                    "name": "능형근 (Rhomboids)",
                    "origin": "Spinous processes C7-T5",
                    "insertion": "Medial border of scapula",
                    "action": "Scapular retraction",
                    "type": "Phasic (강화/활성화)"
                  }
                ],
                "manual_technique": {
                  "met": "대흉근 가동성 회복 MET: 회원이 앉은 벤치에서 양손을 깍지 껴 뒤통수에 댑니다. 트레이너는 회원 뒤에 서서 회원의 양 팔꿈치를 잡고 뒤로 부드럽게 젖혀 가슴을 엽니다. 회원이 양 팔꿈치를 앞으로 모으려는 능동적인 힘을 7초간 방어한 후 가동 범위를 뒤로 더 늘려 전면 사슬을 시원하게 오픈합니다.",
                  "prt": "능형근 PRT: 엎드린 회원의 날개뼈와 척추 사이 능형근 텐션 부위를 찾아 핀치 그립합니다. 회원의 팔을 베드 밑으로 툭 떨어뜨리고 날개뼈를 뒤로 가볍게 모아주어(후인 유도) 등 근육을 느슨하게 세팅한 채 90초간 이완을 기다립니다."
                },
                "red_flag": "목을 회전할 때 날개뼈 쪽으로 강한 방사통이 뻗친다면 목(경추) 이슈 체크.",
                "image_url": "assets/images/lumbar.png"
              }
            ]
          }
        ]
      },
      {
        "id": "sym_thoracic_stiffness",
        "title": "등 굽음 체형 및 숨쉬기 답답함",
        "type": "symptom_location",
        "children": [
          {
            "id": "disease_thoracic_kyphosis",
            "title": "원인 A: 흉곽 가동성 저하 기인",
            "type": "disease",
            "children": [
              {
                "id": "sub_t_spine_immobile",
                "title": "흉추 후만 패턴",
                "type": "sub_class",
                "clinical_insight": "흉추(등뼈) 관절이 굽은 채 뻣뻣해지면 호흡 시 갈비뼈(흉곽)의 자연스러운 팽창을 방해하여 가슴을 답답하게 하고 코어 세팅을 어렵게 만듭니다.",
                "postural_pattern": "Thoracic Kyphosis (흉추 후만증)",
                "teaching_cues": {
                  "analogy": "새장에 녹이 슬어서 새장 창살(갈비뼈)이 안 벌려지는 거예요. 숨을 마시려면 녹슨 창살부터 부드럽게 움직이게 기름칠을 해줘야 합니다.",
                  "movement_cue": "등을 둥글게 말았다가(고양이), 명치를 하늘로 끌어올리면서(소) 등뼈 마디마디가 움직이는 걸 느껴보세요."
                },
                "corrective_exercise": {
                  "step1_mobility": "오픈 북 스트레칭 (Open Book) - 흉추 회전 가동성 확보",
                  "step2_activation": "프론 코브라 (Prone Cobra) - 하부 흉추 기립근 활성화",
                  "step3_integration": "케틀벨 헤일로 (Kettlebell Halo) - 코어 고정 후 흉추 동적 가동"
                },
                "contraindications": [
                  "중량 스쿼트 및 데드리프트 (흉추 무너지면 요추 박살남)",
                  "무리한 브릿지(Bridge) 동작"
                ],
                "assessment": {
                  "mrt": "[흉곽 팽창도 측정] 줄자를 이용해 흉골 검상돌기 위치에서 숨을 최대로 내쉬었을 때와 들이마셨을 때의 둘레 차이를 봅니다. 5cm 미만이면 흉곽 모빌리티 저하로 판별합니다.",
                  "mmt_details": [
                    {
                      "muscle": "흉추 기립근",
                      "position": "회원은 엎드린 상태에서 두 손을 이마에 대고 가슴 명치가 바닥에서 떨어질 때까지 상체를 들어 올립니다.",
                      "fixation": "트레이너는 회원의 엉덩이와 요추 부위를 폼롤러나 손으로 단단히 눌러 하체를 안정화합니다.",
                      "test": "트레이너가 회원의 등 상부(흉추부)를 바닥 쪽으로 지그시 눌러 흉추를 펴내는 버티기 힘을 확인합니다."
                    }
                  ]
                },
                "involved_muscles": [
                  {
                    "name": "흉추 다열근 (Thoracic Multifidus)",
                    "origin": "Transverse processes of thoracic vertebrae",
                    "insertion": "Spinous processes of vertebrae above",
                    "action": "Spinal extension, stabilization",
                    "type": "Phasic (활성화/모빌리티 확보)"
                  }
                ],
                "manual_technique": {
                  "met": "흉곽 확장 호흡 케어: 회원이 폼롤러나 벤치에 앉은 자세에서 호흡을 흉곽(갈비뼈 측면)으로 깊게 들이마시게 합니다. 이때 흉곽이 옆으로 팽창하려는 힘을 트레이너가 양손으로 갈비뼈 바깥에서 안쪽으로 쥐어짜듯 7초간 저항합니다. 깊게 내쉴 때 흉곽의 텐션이 떨어지는 것을 인지시킵니다.",
                  "prt": "흉추 기립근 PRT: 엎드린 회원의 등 중앙 흉추 극돌기 바로 옆 근육 라인의 단단한 띠를 컨택합니다. 얇은 베개나 수건을 회원의 명치 밑에 받쳐 등을 살짝 둥글게 말아(굴곡 세팅) 근육 텐션을 0으로 만든 채 90초 유지합니다."
                },
                "red_flag": "시니어 회원의 경우 무리한 흉추 신전 시 미세 골절 리스크 주의.",
                "image_url": "assets/images/lumbar.png"
              }
            ]
          }
        ]
      },
      {
        "id": "sym_rib_flare",
        "title": "오버헤드 프레스 시 허리 꺾임 및 갈비뼈 들림 (Rib Flare)",
        "type": "symptom_location",
        "children": [
          {
            "id": "disease_core_bracing",
            "title": "원인 A: 코어 브레이싱 실패 기인",
            "type": "disease",
            "children": [
              {
                "id": "sub_oblique_weak",
                "title": "복횡근 및 내복사근 기능 저하 (Open Scissors)",
                "type": "sub_class",
                "clinical_insight": "가위가 활짝 열린 것처럼(Open Scissors Syndrome) 갈비뼈가 위로 들리고 골반이 앞으로 쏟아지는 현상입니다. 코어 실린더가 잠기지 않아 상체의 모든 무게가 요추(허리) 후관절로 짓눌리게 됩니다.",
                "postural_pattern": "Open Scissors Syndrome (오픈 시저스 증후군)",
                "teaching_cues": {
                  "analogy": "물기둥(코어)이 단단해야 무거운 걸 드는데, 물기둥 중간에 구멍이 뚫려서 물이 줄줄 새어나가니까 허리가 대신 그 무게를 다 버티며 꺾이는 거예요.",
                  "movement_cue": "헛기침을 '크흠!' 하고 뱉을 때 단단해지는 배의 압력을 유지하면서, 갈비뼈를 배꼽 쪽으로 지퍼 채우듯이 끌어내리세요."
                },
                "corrective_exercise": {
                  "step1_mobility": "폼롤러 흉추 신전 모빌리티 (흉추 가동성 부족 보상 방지)",
                  "step2_activation": "90/90 호흡(Breathing) 훈련 및 펠빅 틸트(PPT) 인지",
                  "step3_integration": "데드버그 (Dead bug) 및 하프 닐링 케이블 촙 (Cable Chop)"
                },
                "contraindications": [
                  "중량 스탠딩 오버헤드 프레스 (코어 통제 전까지 시티드로 대체)",
                  "허리를 과도하게 젖히는 코브라 스트레칭"
                ],
                "assessment": {
                  "mrt": "[Rib Flare 시각적 평가] 회원을 앙와위로 눕히고 양팔을 머리 위로 만세하게 합니다. 이때 하부 갈비뼈(Rib margin)가 바닥에서 붕 솟아오르고 허리에 주먹 하나가 들어갈 정도로 아치가 심해지면 코어 조절 능력이 상실된 것입니다.",
                  "mmt_details": [
                    {
                      "muscle": "내복사근 / 복횡근",
                      "position": "앙와위 자세에서 무릎을 90도 굽히고 발바닥을 바닥에 댑니다.",
                      "fixation": "트레이너는 회원의 골반이 흔들리지 않게 고정합니다.",
                      "test": "회원에게 갈비뼈를 아래로 끌어내리며 복부를 납작하게 만들게(Bracing) 한 뒤, 트레이너가 어깨를 대각선 방향으로 밀어 코어의 회전/신전 저항력을 테스트합니다."
                    }
                  ]
                },
                "involved_muscles": [
                  {
                    "name": "복횡근 (Transversus Abdominis)",
                    "origin": "Inguinal ligament, Iliac crest, Ribs 7-12",
                    "insertion": "Linea alba, Pubic crest",
                    "action": "Compresses abdomen (Core Bracing)",
                    "type": "Phasic (강화/안정화)"
                  },
                  {
                    "name": "요부 기립근 (Lumbar Erector Spinae)",
                    "origin": "Sacrum, Iliac crest",
                    "insertion": "Thoracic/Cervical vertebrae, Ribs",
                    "action": "Spinal extension",
                    "type": "Tonic (이완)"
                  }
                ],
                "manual_technique": {
                  "met": "호흡을 통한 코어 릴리즈: 앙와위로 누운 회원의 들린 갈비뼈 측면에 손을 댑니다. 회원이 깊게 숨을 들이마실 때 갈비뼈가 옆으로 벌어지려는 힘을 강하게 막고(등척성), 숨을 끝까지 길게(후~~) 내뱉을 때 트레이너가 갈비뼈를 골반 대각선 아래 방향으로 지그시 눌러 내려 닫아줍니다.",
                  "prt": "요방형근/기립근 PRT: 엎드린 자세에서 과긴장된 허리 뒷근육(Q.L)을 컨택합니다. 회원의 양 다리를 트레이너 쪽(통증이 있는 쪽)으로 구부려 골반을 측굴시키고, 허리가 가장 편안하게 헐렁해지는 각도에서 90초간 텐션을 없앱니다."
                },
                "red_flag": "운동 중 급격한 복부 통증이나 서혜부 방사통 발생 시 탈장 주의.",
                "image_url": "assets/images/lumbar.png"
              }
            ]
          },
          {
            "id": "disease_lat_tightness",
            "title": "원인 B: 광배근 타이트니스 보상 기인",
            "type": "disease",
            "children": [
              {
                "id": "sub_lat_overactive",
                "title": "광배근 단축 및 견관절 굴곡 제한",
                "type": "sub_class",
                "clinical_insight": "광배근은 팔(상완골)에서 시작해 골반과 허리(흉요근막)까지 이어지는 거대한 근육입니다. 이 근육이 뻣뻣하면 팔을 위로 들 때, 억지로 팔을 올리기 위해 광배근이 허리와 갈비뼈를 통째로 앞으로 잡아당겨 허리가 꺾이게 됩니다.",
                "postural_pattern": "Flat Back (일자 허리) 동반 광배근 우세",
                "teaching_cues": {
                  "analogy": "팔이랑 허리가 질긴 고무줄 하나로 묶여 있는 상태라, 팔을 위로 번쩍 들면 허리가 고무줄에 딸려 올라가서 꺾이는 겁니다. 고무줄을 늘려야 해요.",
                  "movement_cue": "팔을 귀 옆에 붙이려고 억지로 허리를 꺾지 마세요. 허리는 벽에 딱 붙인 채 팔이 올라가는 곳까지만 올려보세요."
                },
                "corrective_exercise": {
                  "step1_mobility": "폼롤러 광배근/대원근 타겟 SMR (겨드랑이 아래 릴리즈)",
                  "step2_activation": "하프 닐링 광배근 스트레칭 (골반 후방경사 잠그고 팔 뻗기)",
                  "step3_integration": "월 슬라이드 (Wall Slide) - 허리를 벽에 밀착한 상태로 어깨 굴곡 훈련"
                },
                "contraindications": [
                  "중량 풀업 및 랫풀다운 (광배근 우세 패턴 심화)",
                  "키핑 풀업(Kipping Pull-up) 등 반동을 쓰는 상지 운동"
                ],
                "assessment": {
                  "mrt": "[광배근 유연성 평가 (Lat Length Test)] 앙와위에서 무릎을 굽혀 허리를 바닥에 완전히 밀착(PPT)시킵니다. 양팔을 앞으로 나란히 한 뒤 머리 위로 천천히 넘겼을 때, 팔이 바닥에 닿기 전 허리가 바닥에서 뜨거나 팔이 바깥으로 벌어지면 광배근 단축입니다.",
                  "mmt_details": [
                    {
                      "muscle": "광배근",
                      "position": "엎드린 자세(복와위)에서 팔을 몸통 옆에 붙이고 내회전(손등이 엉덩이를 향하게) 시킵니다.",
                      "fixation": "트레이너는 회원의 반대편 골반 부위를 눌러 고정합니다.",
                      "test": "회원에게 팔을 천장 위(신전 및 내전)로 들어올리게 한 뒤, 트레이너가 전완을 잡아 바닥 바깥쪽 방향(굴곡 및 외전)으로 눌러 버티는 힘을 봅니다."
                    }
                  ]
                },
                "involved_muscles": [
                  {
                    "name": "광배근 (Latissimus Dorsi)",
                    "origin": "T7-L5 spinous processes, Thoracolumbar fascia, Iliac crest",
                    "insertion": "Intertubercular groove of humerus",
                    "action": "Shoulder extension, Adduction, Internal rotation",
                    "type": "Tonic (이완)"
                  }
                ],
                "manual_technique": {
                  "met": "광배근 PIR: 측와위로 눕힌 회원의 위쪽 팔을 머리 위(굴곡)로 최대한 늘려 잡습니다. 골반을 단단히 고정시킨 후, 회원이 팔을 골반 쪽으로(내전 및 신전) 강하게 당기려는 힘을 7초간 방어합니다. 힘을 빼면 팔을 머리 위로 더 뻗어 측면 사슬 전체를 이완합니다.",
                  "prt": "광배근 PRT: 엎드린 회원의 겨드랑이 바로 밑 광배근 외측연의 결절 부위를 컨택합니다. 팔을 몸통 옆으로 바짝 붙이고(내전), 안으로 돌려(내회전) 근막을 완전히 느슨하게 만든 채 90초간 인내합니다."
                },
                "red_flag": "어깨 전면부 통증이 동반되면 이두근 건염(Biceps Tendinitis)도 함께 체크.",
                "image_url": "assets/images/shoulder.png"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "part_elbow_wrist",
    "title": "💪 팔/손목 (Elbow & Wrist)",
    "type": "body_part",
    "children": [
      {
        "id": "sym_tennis_elbow",
        "title": "기구 그립 시 팔꿈치 바깥쪽 뻐근함",
        "type": "symptom_location",
        "children": [
          {
            "id": "disease_lateral_epi",
            "title": "원인 A: 전완(아래팔) 과사용 기인",
            "type": "disease",
            "children": [
              {
                "id": "sub_wrist_extensor",
                "title": "손목 폄근 과활성화",
                "type": "sub_class",
                "clinical_insight": "바벨이나 덤벨을 쥘 때 전완근을 비정상적으로 과사용하여, 근육이 시작되는 팔꿈치 바깥쪽 건(Tendon) 부위에 텐션이 누적된 상태입니다.",
                "postural_pattern": "Over-gripping Pattern / 손목 과신전 체형",
                "teaching_cues": {
                  "analogy": "가느다란 실(힘줄)에 무거운 추를 매달고 계속 흔들다 보니 실 끝부분(팔꿈치 바깥)이 조금씩 뜯어지고 있는 중이에요.",
                  "movement_cue": "바벨을 쥘 때 손목이 뒤로 꺾이지 않게, 주먹과 팔뚝이 깁스한 것처럼 일자가 되게 꽉 쥐세요."
                },
                "corrective_exercise": {
                  "step1_mobility": "전완근 스트레칭 (손등 바닥으로 꺾기)",
                  "step2_activation": "타이거 테일 롤러 마사지스틱 활용",
                  "step3_integration": "파머스 워크 (Farmer's Walk) - 중립 손목 그립 유지 훈련"
                },
                "contraindications": [
                  "덤벨 레터럴 레이즈 (손목 꺾임 시 최악)",
                  "바벨 컬 (EZ-Bar로 교체 권장)"
                ],
                "assessment": {
                  "mrt": "[Cozen's 동적 평가] 회원은 팔꿈치를 90도 굽히고 주먹을 쥔 채 손목을 몸 쪽으로 젖힙니다(배측굴곡 세팅). 트레이너가 이 주먹을 아래로 강하게 누를 때 팔꿈치 바깥쪽에 찌릿함이 발현되는지 봅니다.",
                  "mmt_details": [
                    {
                      "muscle": "장요측수근신근",
                      "position": "회원은 팔꿈치를 쭉 펴고 손바닥이 바닥을 향하게 한 상태에서 손목을 손등 쪽으로 끝까지 젖힙니다.",
                      "fixation": "트레이너는 회원의 전완 중간 부위를 흔들리지 않게 양손으로 꽉 잡아 고정합니다.",
                      "test": "회원의 손등을 손바닥 방향(굴곡)으로 강하게 눌러 신전근의 버티는 토크를 확인합니다."
                    }
                  ]
                },
                "involved_muscles": [
                  {
                    "name": "수근신근 (Wrist Extensors)",
                    "origin": "Lateral epicondyle of humerus",
                    "insertion": "Base of metacarpal bones",
                    "action": "Wrist extension",
                    "type": "Tonic (이완)"
                  }
                ],
                "manual_technique": {
                  "met": "전완 신전근 이완기법: 회원은 팔꿈치를 펴고 반대쪽 손으로 손목을 바닥 쪽으로 지그시 꺾어 전완 상단을 최대로 늘려줍니다. 트레이너가 손등을 받쳐 저항벽을 만들고, 회원이 손목을 위로 젖히려는 능동적인 힘(20%)을 7초간 쓴 뒤 릴리즈합니다.",
                  "prt": "전완 신전근 PRT: 앉은 회원의 팔꿈치 바깥쪽(외상과 바로 밑) 볼록 튀어나온 전완 근복부를 엄지로 부드럽게 누릅니다. 회원의 손목을 뒤로 젖히고(신전 세팅) 팔꿈치를 가장 편안한 각도로 구부려 전완 텐션을 완전히 없앤 상태를 90초간 인내합니다."
                },
                "red_flag": "운동 후 열감, 붓기가 뚜렷하면 무리한 마사지를 피하고 아이싱 및 휴식 권장.",
                "image_url": "assets/images/shoulder.png"
              }
            ]
          },
          {
            "id": "disease_shoulder_comp",
            "title": "원인 B: 어깨 안정성 부재(보상 작용)",
            "type": "disease",
            "children": [
              {
                "id": "sub_sh_instability",
                "title": "근위부 약화로 인한 원위부 보상 패턴",
                "type": "sub_class",
                "clinical_insight": "뿌리(어깨)가 약하면 가지(팔꿈치, 손목)가 대신 무리하게 일을 합니다. 프레스 동작 시 회전근개가 관절을 잡아주지 못해 팔 전체가 흔들리면 손목과 전완 근육이 브레이크 역할을 하느라 뻣뻣해집니다.",
                "postural_pattern": "Proximal Instability (근위부 불안정성 체형)",
                "teaching_cues": {
                  "analogy": "배(몸통)가 흔들리면 돛대(팔)를 잡고 있는 밧줄(전완근)이 끊어질 듯이 팽팽해지죠. 배 자체의 중심(어깨 심부)을 묵직하게 잡아야 합니다.",
                  "movement_cue": "그립을 너무 꽉 쥐지 말고, 어깨뼈를 등 뒤 주머니에 꽂아 넣는 느낌으로 먼저 안정화시키세요."
                },
                "corrective_exercise": {
                  "step1_mobility": "어깨 후방 관절낭 폼롤링",
                  "step2_activation": "밴드 익스터널 로테이션 (Band External Rotation) - 극하근 세팅",
                  "step3_integration": "터키시 겟업 (Turkish Get-Up) 파셜 동작 - 전신-어깨 통합 안정화"
                },
                "contraindications": [
                  "불안정한 지면(보수볼 등) 위에서의 푸시업",
                  "중량 풀업 (관절 통제 불능 상태)"
                ],
                "assessment": {
                  "mrt": "[동적 프레스 평가] 오버헤드 프레스나 푸시업 동작 시 어깨가 과하게 으쓱거리거나 팔꿈치가 좌우로 덜렁거리는지 관찰함과 동시에 어깨 심부 근력을 테스트합니다.",
                  "mmt_details": [
                    {
                      "muscle": "극하근",
                      "position": "팔꿈치를 옆구리에 밀착시킨 상태로 90도 굽히고 손을 바깥쪽으로 수평 회전시킵니다(외회전 셋업).",
                      "fixation": "트레이너는 회원의 팔꿈치가 몸통에서 떨어지지 않게 벽을 세워 눌러줍니다.",
                      "test": "회원의 손목을 배 쪽으로(내회전 방향) 밀어붙이며 어깨 후면부 안정화 근육이 버티는지 체크합니다."
                    }
                  ]
                },
                "involved_muscles": [
                  {
                    "name": "극하근 (Infraspinatus)",
                    "origin": "Infraspinous fossa of scapula",
                    "insertion": "Greater tubercle of humerus",
                    "action": "External rotation",
                    "type": "Phasic (안정성 확보)"
                  }
                ],
                "manual_technique": {
                  "met": "어깨 후면 등척성 활성화: 팔꿈치를 직접 압박하는 대신, 밴드나 벽을 이용해 팔을 바깥쪽으로 회전하며 버티는(외회전 등척성) 루틴을 통해 회전근개의 코어 역할을 먼저 깨워줍니다.",
                  "prt": "어깨 후방 관절낭 릴리즈: 엎드린 회원의 어깨 후면(극하근/소원근) 텐션 스팟을 압박한 채 팔을 밖으로 부드럽게 돌려 어깨 뒤쪽 긴장을 떨어뜨려 관절 중심화를 돕습니다."
                },
                "red_flag": "특정 각도에서 어깨가 헐거운 느낌(불안정성)이 강하다면 딥스 등 위험 종목 배제.",
                "image_url": "assets/images/shoulder.png"
              }
            ]
          }
        ]
      },
      {
        "id": "sym_wrist_extension",
        "title": "푸시업/플랭크 시 손목 앞쪽 꺾임 통증",
        "type": "symptom_location",
        "children": [
          {
            "id": "disease_wrist_flexor_tight",
            "title": "원인 A: 전완부 유연성 결여",
            "type": "disease",
            "children": [
              {
                "id": "sub_flexor_carpi",
                "title": "수근굴근 만성 타이트니스",
                "type": "sub_class",
                "clinical_insight": "마우스 작업이나 덤벨을 꽉 쥐는 습관(Over-gripping)으로 손목 굽힘근이 뻣뻣해지면, 바닥을 짚을 때 손목이 90도(배측굴곡)로 꺾이지 않아 관절 앞쪽 뼈끼리 강하게 압박됩니다.",
                "postural_pattern": "라운드 숄더 및 손목 굽힘(Flexion) 고착형",
                "teaching_cues": {
                  "analogy": "손목 안쪽 근육이 고무줄처럼 질겨서 손등 쪽으로 넘어가질 않으니까, 관절 뼈 자체가 맷돌처럼 짓눌리고 있는 거예요.",
                  "movement_cue": "손바닥 아랫부분(수근부)에만 체중을 싣지 말고, 열 손가락 끝으로 바닥을 움켜쥐듯이 힘을 분산시켜보세요."
                },
                "corrective_exercise": {
                  "step1_mobility": "네발기기(Quadruped) 손목 락킹(Rocking) 스트레칭 (손가락 방향 다양하게)",
                  "step2_activation": "손목 신전근(Extensors) 리버스 컬 훈련",
                  "step3_integration": "케틀벨 파머스 워크 (Kettlebell Farmer's Walk) - 중립 손목 코어 훈련"
                },
                "contraindications": [
                  "맨손 바닥 푸시업 (통증 소실 전까지 푸시업 바 필수 사용)",
                  "과도한 중량의 바벨 컬 (손목이 꺾이는 폼)"
                ],
                "assessment": {
                  "mrt": "[Phalen's Test 및 손목 가동성 검사] 양 손등을 맞대고 손목을 90도 꺾어 가슴 앞에서 1분간 유지하게 합니다. 찌릿한 저림(수근관 증후군)이 유발되는지 보고, 능동적인 손목 폄(신전) 각도가 70도 이하인지 확인합니다.",
                  "mmt_details": [
                    {
                      "muscle": "수근굴근",
                      "position": "회원은 전완을 테이블에 올리고 손바닥이 천장을 향하게(회외) 한 뒤 손목을 안으로 굽힙니다(굴곡).",
                      "fixation": "트레이너는 회원의 전완 중간을 흔들리지 않게 고정합니다.",
                      "test": "회원의 손바닥(수장부)을 바닥 쪽(신전 방향)으로 강하게 눌러 굴곡근이 뻣뻣하게 버티는지 확인합니다."
                    }
                  ]
                },
                "involved_muscles": [
                  {
                    "name": "수근굴근 (Wrist Flexors)",
                    "origin": "Medial epicondyle of humerus",
                    "insertion": "Carpal and metacarpal bones",
                    "action": "Wrist flexion",
                    "type": "Tonic (이완)"
                  }
                ],
                "manual_technique": {
                  "met": "손목 굴곡근 PIR: 회원은 팔꿈치를 펴고 손바닥을 천장으로 향하게 합니다. 트레이너가 회원의 손가락과 손바닥을 감싸고 바닥 쪽(신전)으로 젖혀 텐션을 만듭니다. 회원에게 손목을 안으로 굽히려는 힘(20%)을 쓰게 하고 7초간 막은 뒤, 힘을 풀 때 더 깊게 스트레칭합니다.",
                  "prt": "전완 굴곡근 PRT: 앙와위 자세에서 전완 앞쪽(팔꿈치 안쪽 아래)의 볼록한 굴곡근 복부 텐션을 엄지로 압박합니다. 손목을 안으로 완전히 굽히고(굴곡) 팔꿈치도 살짝 굽혀 근육을 가장 느슨하게 90초간 세팅합니다."
                },
                "red_flag": "엄지, 검지, 중지 손가락 끝으로 저림이 심하다면 손목터널증후군(CTS) 의심 병원 진료.",
                "image_url": "assets/images/shoulder.png"
              }
            ]
          },
          {
            "id": "disease_serratus_shoulder",
            "title": "원인 B: 상지 체중 지지 실패 기인",
            "type": "disease",
            "children": [
              {
                "id": "sub_serratus_wrist",
                "title": "전거근 약화 및 어깨 안정성 부재",
                "type": "sub_class",
                "clinical_insight": "플랭크나 푸시업 시 어깨(견갑대)를 앞으로 강하게 밀어내어 상체를 띄워주는 전거근이 약하면, 상체의 체중이 고스란히 아래로 쏟아져 가장 약한 관절인 손목에 압력이 폭발합니다.",
                "postural_pattern": "익상견갑 (Winging Scapula) / 어깨 무너짐",
                "teaching_cues": {
                  "analogy": "건물의 기둥(어깨)이 무너지니까 1층 바닥(손목)이 그 무게를 다 떠받치고 박살나는 중이에요. 겨드랑이 밑 근육으로 바닥을 밀어내야 합니다.",
                  "movement_cue": "날개뼈가 등 뒤로 튀어나오지 않게, 겨드랑이 아래에 힘을 줘서 바닥과 내 몸이 최대한 멀어지게 밀어내세요!"
                },
                "corrective_exercise": {
                  "step1_mobility": "소흉근 폼롤러 릴리즈 (가슴 펴기)",
                  "step2_activation": "스카풀라 푸시업 (Scapular Push-up) - 무릎 꿇고 전거근 인지",
                  "step3_integration": "월 슬라이드 위드 폼롤러 (Wall Slide) - 전거근 활성화 상태로 상완 거상"
                },
                "contraindications": [
                  "무거운 벤치프레스 (어깨 통제 상실 시 손목 꺾임 치명적)",
                  "덤벨 플라이 (견갑대 불안정 시 인대 부상 위험)"
                ],
                "assessment": {
                  "mrt": "[플랭크 시각적 보상 평가] 회원에게 플랭크 자세를 취하게 합니다. 10초 내에 날개뼈 사이가 푹 꺼지거나 날개뼈가 등 뒤로 박쥐처럼 튀어나온다면(Winging) 전거근 약화가 뚜렷한 것입니다.",
                  "mmt_details": [
                    {
                      "muscle": "전거근",
                      "position": "회원은 앉은 자세에서 팔을 앞으로 130도 정도 뻗고 어깨를 앞으로 쭉 내밉니다(전인).",
                      "fixation": "트레이너는 회원의 날개뼈(견갑골) 바깥쪽 연을 손으로 지지합니다.",
                      "test": "회원의 손목 부근(전완 하단)을 잡고 몸통 쪽(견갑골 후인 방향)으로 강하게 밀며 전거근이 날개뼈를 잘 고정하는지 확인합니다."
                    }
                  ]
                },
                "involved_muscles": [
                  {
                    "name": "전거근 (Serratus Anterior)",
                    "origin": "Outer surfaces of upper 8-9 ribs",
                    "insertion": "Medial border of scapula",
                    "action": "Protracts and upwardly rotates scapula",
                    "type": "Phasic (강화/안정화)"
                  }
                ],
                "manual_technique": {
                  "met": "전거근 활성화 등척성 기법: 회원이 앉은 상태에서 팔을 앞으로 뻗게 합니다. 트레이너가 앞에서 주먹을 맞대고, 회원에게 트레이너를 밀어내듯 팔을 뻗으라고 지시하며(전인) 10초간 저항을 버텨 전거근 신경을 깨웁니다.",
                  "prt": "견갑하근/전거근 주변 릴리즈: 앙와위로 누워 팔을 벌린 상태에서, 겨드랑이 안쪽(견갑골 외측연 깊은 곳)의 텐션을 찾아 가볍게 컨택하고 팔을 부드럽게 지지하여 텐션을 낮춥니다."
                },
                "red_flag": "어깨 전면으로 날카로운 통증이 동반되면 회전근개 손상 여부부터 감별.",
                "image_url": "assets/images/shoulder.png"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "part_hip_groin",
    "title": "🩳 고관절/서혜부 (Hip & Groin)",
    "type": "body_part",
    "children": [
      {
        "id": "sym_hip_impingement",
        "title": "스쿼트/레그프레스 시 팬티라인 찝힘 (FAI)",
        "type": "symptom_location",
        "children": [
          {
            "id": "disease_anterior_glide_hip",
            "title": "원인 A: 굴곡근 우세 기인 (대퇴골 전방활주)",
            "type": "disease",
            "children": [
              {
                "id": "sub_psoas_dom_hip",
                "title": "장요근 및 대퇴직근 과긴장",
                "type": "sub_class",
                "clinical_insight": "고관절 앞쪽 근육이 너무 타이트하면, 앉는 동작(고관절 굴곡) 시 대퇴골두가 소켓(관절구) 안에서 부드럽게 뒤로 미끄러지지(Posterior Glide) 못하고 앞쪽 구조물을 쾅쾅 찝게 됩니다.",
                "postural_pattern": "Anterior Pelvic Tilt (골반 전방경사) / 고관절 굴곡 구축",
                "teaching_cues": {
                  "analogy": "문짝이 문틀에 딱 맞게 닫혀야 하는데, 경첩(고관절) 앞쪽에 두꺼운 고무줄이 끼어있어서 문을 닫을 때마다 억지로 꽉 찡기는 거예요.",
                  "movement_cue": "팬티라인에 끼워둔 볼펜을 접어서 부러뜨리는 느낌이 아니라, 엉덩이를 뒤로 깊게 빼면서 볼펜을 살짝 놔주는 느낌으로 앉아보세요."
                },
                "corrective_exercise": {
                  "step1_mobility": "하프 닐링 장요근 스트레칭 (골반 후방경사 세팅 필수)",
                  "step2_activation": "짐볼 힙 스러스트 (Hip Thrust) - 대둔근 활성화를 통한 상호억제",
                  "step3_integration": "고블렛 스쿼트 (Goblet Squat) - 상체를 세워 힙 힌지 각도 재교육"
                },
                "contraindications": [
                  "발판을 너무 높게 세팅한 레그 프레스 (찝힘 각도 폭발)",
                  "브이업(V-up) 등 장요근을 극단적으로 쓰는 복근 운동"
                ],
                "assessment": {
                  "mrt": "[FADIR Test] 회원을 앙와위로 눕히고 고관절을 90도 굽힌(Flexion) 뒤, 안쪽으로 모으고(Adduction) 내회전(Internal Rotation) 시켰을 때 서혜부(팬티라인) 깊은 곳에 날카로운 찝힘이 나타나는지 확인합니다.",
                  "mmt_details": [
                    {
                      "muscle": "장요근",
                      "position": "앉은 자세에서 무릎을 가슴 쪽으로 100도 이상 들어올립니다.",
                      "fixation": "트레이너는 반대편 골반이 뜨지 않게 고정합니다.",
                      "test": "회원의 허벅지 하단(무릎 위)을 바닥 쪽으로 지그시 누르며 장요근이 뻣뻣하게 버티는지 확인합니다."
                    }
                  ]
                },
                "involved_muscles": [
                  {
                    "name": "장요근 (Iliopsoas)",
                    "origin": "T12-L5 vertebrae, Iliac fossa",
                    "insertion": "Lesser trochanter of femur",
                    "action": "Hip flexion",
                    "type": "Tonic (이완)"
                  },
                  {
                    "name": "대둔근 (Gluteus Maximus)",
                    "origin": "Posterior ilium, Sacrum",
                    "insertion": "Gluteal tuberosity, IT tract",
                    "action": "Hip extension",
                    "type": "Phasic (강화/활성화)"
                  }
                ],
                "manual_technique": {
                  "met": "고관절 후방활주(Posterior Glide) MET: 앙와위로 누운 회원의 무릎을 굽혀 세웁니다. 트레이너의 양손을 무릎 앞쪽에 대고 체중을 실어 대퇴골 방향(바닥 대각선 아래)으로 지그시 압박합니다. 이때 회원이 무릎을 가슴 쪽으로 밀어올리려(20% 힘) 하고 7초간 방어하여 관절 중심화를 유도합니다.",
                  "prt": "장요근 PRT: 배꼽과 골반 앞 뼈(ASIS) 사이 심부 장요근 텐션을 손끝으로 컨택한 후, 회원의 고관절과 무릎을 가슴 쪽으로 깊게 굽혀 복부를 완전히 느슨하게 만든 채 90초간 이완합니다."
                },
                "red_flag": "서혜부 탈장(Hernia) 병력이 있거나 사타구니가 부어있다면 압박 금지.",
                "image_url": "assets/images/lumbar.png"
              }
            ]
          },
          {
            "id": "disease_post_capsule_hip",
            "title": "원인 B: 후면부 타이트니스 기인",
            "type": "disease",
            "children": [
              {
                "id": "sub_piri_glute_tight",
                "title": "고관절 심부 외회전근 및 후방관절낭 단축",
                "type": "sub_class",
                "clinical_insight": "고관절 뒤쪽에 있는 엉덩이 심부 근육(이상근 등)과 캡슐(관절낭)이 질겨지면, 뼈가 뒤로 빠져나가야 할 공간을 막아버려서 결국 뼈가 앞쪽으로 밀려 충돌을 일으킵니다.",
                "postural_pattern": "팔자걸음 체형 / 고관절 외회전 고착",
                "teaching_cues": {
                  "analogy": "바지 뒷주머니 쪽 천이 꽉 쪼그라들어 있어서, 앉으려고 하면 앞주머니 쪽이 억지로 구겨지는 상황이에요. 뒤쪽을 부드럽게 늘려줘야 합니다.",
                  "movement_cue": "무릎을 바깥으로 과도하게 벌리면서 앉지 말고, 발끝과 무릎 방향을 똑같이 맞춘 채로 앉아보세요."
                },
                "corrective_exercise": {
                  "step1_mobility": "비둘기 자세 (Pigeon Pose) 및 90/90 스트레칭",
                  "step2_activation": "사이드 라이잉 내회전 훈련 (고관절 내회전 가동성 회복)",
                  "step3_integration": "스플릿 스쿼트 (Split Squat) - 양측 고관절 밸런스 훈련"
                },
                "contraindications": [
                  "스모 데드리프트 및 와이드 스쿼트 (외회전근 과부하)",
                  "다리 꼬고 앉기"
                ],
                "assessment": {
                  "mrt": "[고관절 내회전 가동성 검사] 엎드린 상태(복와위)에서 무릎을 90도 굽히고 발을 바깥쪽으로 벌려봅니다(고관절 내회전). 양쪽 각도 차이가 심하고 30도 이하로 제한된다면 심부 외회전근 단축입니다.",
                  "mmt_details": [
                    {
                      "muscle": "이상근",
                      "position": "앉은 자세에서 허벅지를 고정하고 무릎을 안쪽으로 모으며 발을 바깥쪽으로 뻗어 올립니다(외회전 상태).",
                      "fixation": "트레이너는 회원의 무릎 바깥쪽을 받쳐 고정합니다.",
                      "test": "회원의 발목 안쪽을 잡아 바깥쪽으로 밀며 이상근의 버티기 능력을 봅니다."
                    }
                  ]
                },
                "involved_muscles": [
                  {
                    "name": "이상근 (Piriformis)",
                    "origin": "Anterior sacrum",
                    "insertion": "Greater trochanter of femur",
                    "action": "External rotation of hip",
                    "type": "Tonic (이완)"
                  }
                ],
                "manual_technique": {
                  "met": "이상근 PIR: 앙와위로 누워 회원의 무릎을 가슴 쪽으로 당긴 뒤 반대편 어깨 방향(내전)으로 넘깁니다. 회원에게 무릎을 바깥쪽으로 벌리려는 힘을 7초간 쓰게 하고 방어한 뒤, 이완 시 더 안쪽으로 당겨 스트레칭합니다.",
                  "prt": "고관절 후면 PRT: 엎드린 회원의 엉덩이 깊은 곳 뻐근한 포인트를 엄지로 지그시 압박합니다. 다리를 침대 밖으로 떨어뜨리고 가볍게 벌려(외전/외회전) 근육 텐션이 '0'이 되는 지점을 찾아 90초 유지합니다."
                },
                "red_flag": "엉덩이부터 다리 발끝까지 타는 듯한 저림 동반 시 신경학적 디스크 우선 의심.",
                "image_url": "assets/images/leg.png"
              }
            ]
          }
        ]
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = manualDataTree;
}
