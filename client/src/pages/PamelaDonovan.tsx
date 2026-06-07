import { ProseSection, SubPageShell } from "@/components/SubPageShell";

export default function PamelaDonovan() {
  return (
    <SubPageShell
      tag="Veterans"
      title="In Honor of 2nd Lt. Pamela D. Donovan"
      subtitle="A brave, caring and compassionate Irish woman who gave the ultimate sacrifice"
    >
      <ProseSection>
        <p>
          Pamela was born to Irish parents, Joyce and Ted Donovan, in the UK and educated as a nurse and nun in several countries. After hearing of the need for nurses to care for our soldiers in Vietnam, Pamela became a US citizen in order to volunteer in the Army Nurse Corps and Vietnam duty. She was assigned to the 85th Evac Hospital in Qui Nhon. Pamela died after only 4 months in country of pneumonia.
        </p>
        <p style={{ marginTop: "1rem" }}>
          Pamela Donovan did what some US born citizens found they could not. She was very proud to be able to volunteer in the efforts to serve our troops in Vietnam. Her unselfishness and caring makes her someone that we as Americans should never forget.
        </p>
      </ProseSection>

      <ProseSection title="Her Story">
        <p>
          There is much more to her story as we were to learn from Pamela's sister Liz. Liz referred us to the book their mother, Joyce Donovan, had published, <em>Grasping The Nettle</em>.
        </p>
        <p style={{ marginTop: "1rem" }}>
          In May of 1968, Pamela had gone to the beach and suffered severe sunburn and was hospitalized in Qui Nhon. During her recovery, Pamela made an audio tape for her parents in which she "sounded happy and in good spirits." We believe this beach to have been Red Beach — heavily guarded and only open to our service men and women for fun and relaxation.
        </p>
        <p style={{ marginTop: "1rem" }}>
          In subsequent letters she told her parents of her plans to travel to Japan and Australia at the conclusion of her one year tour. She wrote of applying to nursing schools in the USA and furthering her nursing degree. In another letter Pamela told her parents that she had become aware of a "heroin ring" within the hospital and had determined that it was her duty to report this. Her parents wrote back cautioning their daughter to be very careful.
        </p>
      </ProseSection>

      <ProseSection title="July 1968">
        <p>
          On July 4, 1968, Joyce and Ted received a cable stating Pamela had been placed on the seriously ill list as a result of an overdose of barbiturates. On July 9, Pamela was flown to the capital of Vietnam for treatment. On July 8th, Pamela died — the cause listed as pneumonia.
        </p>
        <p style={{ marginTop: "1rem", padding: "1rem", background: "oklch(0.13 0.012 260)", borderRadius: "0.5rem", fontStyle: "italic" }}>
          July 12 the post office brought a letter from their dead daughter, dated July 3: "Dearest Mummy and Daddy, I know over the years you have been unhappy, as I have been unfaithful to the Church... Well, I want you to know that last night I went to the Chaplain out here to Confession, and this morning I went to Mass and Holy Communion. I feel a new person..... All my love Pamela."
        </p>
        <p style={{ marginTop: "1rem" }}>
          The death certificate read: "Died 8 July 1968 in Vietnam from pneumonia secondary to overdose of barbiturates." Six months later, a second certificate added: "Self destruction while mentally unsound." It does not seem possible that this woman, so happy on July 3rd, could have taken her own life five days later.
        </p>
      </ProseSection>

      <ProseSection title="Unanswered Questions">
        <p>
          Nurses who knew Pamela called her mother wanting to tell "the truth" — but were too afraid. All of this leaves so many questions unanswered. However, no matter how many questions the life of Pamela leaves, it makes very clear that 2nd Lt. Pamela Donovan was a brave, caring and compassionate Irish woman who gave the ultimate sacrifice for the love of others.
        </p>
        <p style={{ marginTop: "1.5rem", fontFamily: "var(--font-display)", fontWeight: 600, color: "oklch(0.72 0.19 55)" }}>
          Peace be with you Pamela. With all our Love, America.
        </p>
      </ProseSection>
    </SubPageShell>
  );
}
