
export interface IButton {
    content : string,
    buttonState?: boolean,
    typeButton: string,
    functionClick?: () => void
}
export type TBook = {
    title: string,
    subtitle?: string,
    isbn13?: string,
    price: string,
    image: string,
    url?: string
}

export const books: TBook[]=[

{    
    title:	"Obsessed, Allison Britz ",
    subtitle:	"A brave teen recounts her debilitating struggle with obsessive-compulsive disorder—and brings readers through every painful step as she finds her way to the other side—in this powerful and inspiring memoir. Until sophomore year of high school.",
    isbn13:	"9781098130923",
    price:	"$14.99",
    image:	"https://i.pinimg.com/736x/42/c6/bb/42c6bb6ee2512d2a9c166194c74e0be4.jpg",
    url:	"https://itbook.store/books/9781098130923"},
	
{    title:	"1Q84, Haruki Murakami ",
    subtitle:	"A young woman named Aomame follows a taxi driver’s enigmatic suggestion and begins to notice puzzling discrepancies in the world around her. She has entered, she realizes, a parallel existence, which she calls 1Q84 —“Q is for ‘question mark.’. ",
    isbn13:	"9781642002263",
    price:	"$20.00",
    image:	"https://i.pinimg.com/736x/13/a7/be/13a7be21bc305eb4dcb2d8b2cc1e1ba6.jpg",
    url:	"https://itbook.store/books/9781642002263"},

{    
    title:	"The Metamorphosis, Franz Kafka",
    subtitle:	"The Metamorphosis is a short novel by Franz Kafka, first published in 1915. It is often cited as one of the seminal works of fiction of the 20th century and is widely studied in colleges and universities across the western world. " ,
    isbn13:	"9781800562738",
    price:	"$39.99",
    image:	"https://i.pinimg.com/736x/4e/a6/bf/4ea6bf8f49a4a71c910308e052dfc780.jpg",
    url:	"https://itbook.store/books/9781800562738"},

{    title:	"Little Women, Louisa May Alcott",
    subtitle:	"Little Women is a novel by American author Louisa May Alcott (1832–1888), which was originally published in two volumes in 1868 and 1869. Alcott wrote the books rapidly over several months at the request of her publisher.  ",
    isbn13:	"9781801077330",
    price:	"$49.99",
    image:	"https://i.pinimg.com/736x/da/eb/2e/daeb2ef3a015b189fab96bf11058267d.jpg",
    url:	"https://itbook.store/books/9781801077330"},

{    title:	"Alice's Adventures in Wonderland, Lewis Carroll",
    subtitle:	"It's been 150 years since Lewis Carroll introduced Alice's Adventures in Wonderland, the story which has become a favorite of children and adults the world over. Now, in a deluxe hardcover edition from Puffin, Alice's story comes to life for a whole new generation of readers through the colorful.",
    isbn13:	"9781801810999",
    price:	"$35.99",
    image:	"https://i.pinimg.com/736x/e7/5f/d1/e75fd115e0bd13150be2ef43cc940367.jpg",
    url:	"https://itbook.store/books/9781801810999"},

{    title:	"The Night Ocean, The Night Ocean",
    subtitle:	"Marina Willett, M.D., has a problem. Her husband, Charlie, has become obsessed with H.P. Lovecraft, in particular with one episode in the legendary horror writer's life: In the summer of 1934, the old gent lived for two months with a gay teenage fan named Robert Barlow, at Barlow's family home in central Florida. ",
    isbn13:	"9781801811132",
    price:	"$39.99",
    image:	"https://i.pinimg.com/736x/4c/fe/e8/4cfee82325ba48abb510723a5f5dc319.jpg",
    url:	"https://itbook.store/books/9781801811132"},

{    title:	"The Stranger, Albert Camus ",
    subtitle:	"With the intrigue of a psychological thriller, The Stranger—Camus's masterpiece—gives us the story of an ordinary man unwittingly drawn into a senseless murder on an Algerian beach. With an Introduction by Peter Dunwoodie; translated by Matthew Ward.",
    isbn13:	"9781801812856",
    price:	"$34.99",
    image:	"https://i.pinimg.com/736x/de/a5/0c/dea50c3ae8df9be9ea6f2886cfd40b72.jpg",
    url:	"https://itbook.store/books/9781801812856"},

{    title:	"To Kill a Mockingbird, Harper Lee ",
    subtitle:	"The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it, To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 1960.",
    isbn13:	"9781803242002",
    price:	"$44.99",
    image:	"https://i.pinimg.com/736x/25/b1/1c/25b11c390395cd52dc0a65e19a42fe75.jpg",
    url:	"https://itbook.store/books/9781803242002",
	},
{
    title:	"Der Process,  Franz Kafka",
    subtitle:	"The Trial (original German title: Der Process) is a novel written by Franz Kafka from 1914 to 1915 and published in 1925. One of his best-known works, it tells the story of a man arrested and prosecuted by a remote, inaccessible authority. ",
    isbn13:	"9781804612569",
    price:	"$44.99",
    image:	"https://i.pinimg.com/736x/27/5d/e2/275de225129676f5db6d11bde1bf1867.jpg",
    url:	"https://itbook.store/books/9781804612569",
},
	
{
    title:	"Moby-Dick or The Whale, Herman Melville ",
    subtitle:	"Moby-Dick still stands as an indisputable literary classic. It is the story of an eerily compelling madman pursuing an unholy war against a creature as vast and dangerous and unknowable as the sea itself. But more than just a novel of adventure, more than an encyclopedia of whaling lore and legend, Moby-Dick is a haunting, mesmerizing, and important social commentary populated with several of the most unforgettable and enduring characters in literature. ",
    isbn13:	"9781804617007",
    price:	"$29.99",
    image:	"https://i.pinimg.com/736x/28/98/50/28985049a7775aeff03187b435cb30a2.jpg",
    url:	"https://itbook.store/books/9781804617007"
}
]