const ideas = [
    "Smile at your neighbor.",
    "Take out your trash in the fast food restaurant.",
    "Give bottled mineral water to a 'tukang parkir'.",
    "Hold the door open for someone.",
    "Compliment a stranger.",
    "Donate unused clothes to charity.",
    "Buy a coffee for the person behind you in line.",
    "Pick up litter in your neighborhood.",
    "Call a friend you haven’t spoken to in a while.",
    "Send a handwritten letter to someone special.",
    "Offer to help an elderly person with their groceries.",
    "Pay for someone’s parking meter.",
    "Give someone a genuine compliment.",
    "Donate books to a local library.",
    "Plant a tree.",
    "Support a local artist by buying their work.",
    "Send a thank you note to someone who helped you.",
    "Make a care package for someone in need.",
    "Share a motivational quote on social media.",
    "Give bottled mineral water to a 'tukang parkir'.",
    "Hold the door open for someone.",
    "Compliment a stranger.",
    "Buy extra street food and give it to someone in need.",
    "Help a 'ojek online' driver find a nearby address.",
    "Bring back reusable bags when shopping at the market.",
    "Donate a portion of your paycheck to a local charity.",
    "Share your umbrella with someone caught in the rain.",
    "Offer a ride to someone stranded without transportation.",
    "Support a local warung by buying from them instead of a chain store.",
    "Donate blood at a local blood drive.",
    "Send a thank you message to your local delivery person.",
    "Offer to carry groceries for someone at the supermarket.",
    "Donate old but usable electronics to a community center.",
    "Help an elderly person cross a busy street.",
    "Give your seat to someone on public transportation.",
    "Participate in a local beach or river cleanup.",
    "Bring snacks for your office or classroom.",
    "Leave a generous tip for a 'pedagang kaki lima'.",
    "Volunteer at a local orphanage or community shelter.",
    "Surprise a friend with their favorite snack or drink.",
    "Help a neighbor fix something in their home.",
    "Leave a positive note on someone's motorcycle or car.",
    "Teach someone how to use a smartphone app they're struggling with.",
    "Donate masks and hand sanitizer to a local community.",
    "Offer to watch your neighbor’s children for an hour.",
    "Give out cold drinks to traffic 'Pak Ogah' on a hot day.",
    "Compliment someone's style.",
    "Encourage your friends to participate in a charity run.",
    "Help a friend or family member with their online shopping.",
    "Buy a meal for a homeless person.",
    "Donate books to a rural library or school.",
    "Give free tutoring to kids in your neighborhood.",
    "Organize a donation drive for flood victims.",
    "Invite a new colleague to lunch and make them feel welcome.",
    "Share leftover food with a street animal.",
    "Help elder carry their luggage at the train station or airport.",
    "Donate rice to a local food bank.",
    "Give out free masks at a crowded market.",
    "Teach your housekeeper a new skill.",
    "Contribute to a community crowdfunding for a medical cause.",
    "Plant flowers in public spaces to beautify the area.",
    "Start a recycling initiative in your neighborhood.",
    "Share your Wi-Fi with a student who needs it for online classes.",
    "Encourage local artisans by buying their handmade products.",
    "Help a small business owner set up their social media.",
    "Volunteer to be a 'relawan' during local elections.",
    "Donate toys to a pediatric ward in a hospital.",
    "Buy a coffee for a colleague working late.",
    "Offer to proofread a friend's resume or cover letter.",
    "Share a useful app or tool with your team at work.",
    "Invite a new coworker to join your lunch group.",
    "Donate your old tech gadgets to a local charity.",
    "Help a friend set up their LinkedIn profile.",
    "Leave a positive comment on a friend's social media post.",
    "Offer to teach coding or digital skills to someone interested.",
    "Organize a virtual study group for your classmates.",
    "Give a shoutout to a local business on your Instagram story.",
    "Offer your Netflix password to a friend for a movie night.",
    "Support a friend’s side hustle by sharing their work online.",
    "Pay for a friend’s ride home when they’re out of cash.",
    "Bring in snacks for your team during a big project.",
    "Help a colleague troubleshoot a tech issue.",
    "Share a playlist to boost your friends’ mood at work.",
    "Offer to water a friend’s plants while they’re away.",
    "Donate unused clothes to a thrift store or charity.",
    "Support an online fundraiser or charity campaign.",
    "Send a thank you email to your mentor or teacher.",
    "Help a friend or colleague with their presentation slides.",
    "Start a book exchange at your office or community center.",
    "Offer to help a friend move into a new apartment.",
    "Give a positive review to a local service on Google Maps.",
    "Host a virtual game night for friends and coworkers.",
    "Teach someone how to use a new tech gadget they got.",
    "Share your meal prep with a busy coworker.",
    "Offer to help a friend with their side project.",
    "Organize a charity run or walk with your friends.",
    "Share your favorite productivity hacks with your peers.",
    "Volunteer to lead a workshop or skillshare at your office.",
    "Support a friend’s creative project by sharing it online.",
    "Offer to edit a friend's photo or video content.",
    "Bring in a morning coffee/breakfast for your team in office/organization.",
    "Help someone draft a professional email.",
    "Donate to a friend's crowdfunding campaign.",
    "Create a group chat for a specific hobby or interest.",
    "Encourage a friend who's applying for jobs.",
    "Offer to review a friend’s app or software they developed.",
    "Help a friend research their next big tech purchase.",
    "Share a useful online course with your network.",
    "Teach a friend or coworker a shortcut on their computer.",
    "Leave an encouraging note on a friend's desk or laptop.",
    "Organize a clean-up day in your local park.",
    "Support local artists by buying or promoting their work.",
    "Send a surprise delivery of snacks to a friend’s home.",
    "Help a friend organize their digital files or emails.",
    "Promote a friend’s blog or YouTube channel.",
    "Share your favorite productivity app with your classmates.",
    'Share job openings within your local community.',
    'Donate stationery supplies to underfunded schools.',
    'Gift a small shopping voucher to someone in need.',
    "Offer to run errands for an elderly neighbor.",
    "Spend time chatting with a security guard or janitor to show appreciation.",
    "Organize a cleanup day with friends at a local park or street.",
    "Donate gently used clothes to a community center.",
    "Give up your seat on public transport for someone who needs it more.",
    "Leave a kind note on someone’s desk or door.",
    "Help a friend or family member declutter their space.",
    "Offer to teach a friend or younger family member a skill you know, like cooking or coding.",
    "Assist a local food vendor by helping them set up or clean up.",
    "Recommend your favorite local small business to friends.",
    "Share free, valuable online resources with peers.",
    "Offer to review a friend’s resume or portfolio for feedback.",
    "Share an inspiring podcast or book with someone you know.",
    "Help someone troubleshoot a tech issue over the phone.",
    "Be a conversation partner for someone learning a new language.",
    "Start a book exchange corner at your workplace or local community center.",
    "Host a mini walking tour of your neighborhood’s hidden gems.",
    "Help a friend move without expecting anything in return.",
    "Offer to babysit for friends or family so they can have a break.",
    "Send a voice message checking in on a friend you haven’t spoken to in a while.",
    "Share your knowledge by writing a quick guide or how-to post online.",
    "Offer to water your neighbor’s plants when they’re away.",
    "Join a community garden project and invite others.",
    "Share leftover food with a coworker or friend instead of letting it go to waste.",
    "Give your umbrella to someone caught in the rain.",
    "Organize a skill-swap event with friends or coworkers.",
    "Compliment a stranger’s outfit or effort.",
    "Offer to take photos for tourists or families at a landmark.",
    "Promote a friend’s event or business on your social media.",
    "Join a local beach or river cleanup and encourage friends to come along."

];

document.getElementById('generate-btn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * ideas.length);
    const ideaField = document.getElementById('idea-field');
    ideaField.textContent = ideas[randomIndex];
});
