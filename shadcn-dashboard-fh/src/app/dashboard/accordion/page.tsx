import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
    {
        id: "item-1",
        question: "Is it accessible?",
        answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
        id: "item-2",
        question: "Is it styled?",
        answer: "Yes. It comes with default styles that matches the other components&apos; aesthetic.",
    },
    {
        id: "item-3",
        question: "Is it animated?",
        answer: "Yes. It&apos;s animated by default, but you can disable it if you prefer.",
    },
    {
        id: "item-4",
        question: "Can I use it on multiple projects?",
        answer: "Yes. It's licensed under the MIT license.",
    },
    {
        id: "item-5",
        question: "Who I am?",
        answer: "I am Duvan.",
    },
];

export default function AccordionPage() {
    return (
        <div>
            <Accordion type="single" collapsible className="w-full">
                {
                    /* //Si se cambia el type por multiple y se elimina el collapsible
                se mantendrian varios */
                    items.map((item) => (
                        <AccordionItem value={item.id} key={item.id}>
                            <AccordionTrigger>{item.question}</AccordionTrigger>
                            <AccordionContent>{item.answer}</AccordionContent>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </div>
    );
}
