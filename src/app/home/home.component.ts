import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'dr_dev';
  lang_hindi!: boolean;
  lang_english!: boolean;
  counter1 = 0;
  counter2 = 0;
  counter3 = 0;
  value1 = 1000;
  value2 = 4;
  value3 = 8;
  timerSubscription1!: Subscription;
  timerSubscription2!: Subscription;
  timerSubscription3!: Subscription;
  languageSelected!: boolean;


  english_content = [
    {
      logo: "drDev",
      start: "Start",
      about: "About",
      services: "Services",
      contactUs: "Contact Us",
      appointment: "schedule appointment"
    },
    {
      welcome: "WELCOME TO DOCTORCARE 👋",
      headHeading: "Simplified healthcare for everyone",
      headDescription: "Doctors at DoctorCare go beyond symptoms to address the root cause of your illness and provide a long-term cure."
    },
    {
      stats1: {
        title: "patients served",
      },
      stats2: {
        title: "Specialists available",
      },
      stats3: {
        title: "Years on the market",
      }
    },
    {
      servicesHead: "Services",
      servicesHeading: "Here we have permanent treatment of following diseases through Ayurvedic method and Panchakarma.",
        service1: {
          title: "Skin diseases",
          shortDescription: "Skin disorders vary greatly in symptoms and severity. They can be temporary or permanent, and may be painless or painful. Some have situational causes, while others may be genetic. Some skin conditions are minor, and others can be life-threatening.",
          longDescription: ""
        },
        service2: {
          title: "Diabetes",
          shortDescription: "Diabetes is a group of metabolic disorders characterized by a high blood sugar level over a prolonged period of time. Symptoms often include frequent urination, increased thirst and increased appetite. If left untreated, diabetes can cause many health complications.",
          longDescription: ""
        },
        service3: {
          title: "Kidney diseases",
          shortDescription: "The kidneys are shaped like beans (kidney beans, naturally) and spend their days filtering the blood to remove waste. They also balance your electrolyte levels. Wastes removed from the blood by the kidneys are then passed into the urine and flow out of the body. All of the blood in your body flows through the kidneys several times each day to be cleansed. It’s a big job, and if your kidneys aren’t working right, that can lead to serious health problems. In fact, several kidney diseases can be life threatening.",
          longDescription: ""
        },
        service4: {
          title: "Internal disease",
          shortDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
          longDescription: ""
        },
        service5: {
          title: "Hair fall",
          shortDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
          longDescription: ""
        },
        service6: {
          title: "Blood pressure",
          shortDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
          longDescription: ""
        },service7: {
          title: "Liver problems",
          shortDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
          longDescription: ""
        },
        service8: {
          title: "Piles",
          shortDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
          longDescription: ""
        },
        service9: {
          title: "Joints pain",
          shortDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
          longDescription: ""
        },
        service10: {
          title: "Stomach disease",
          shortDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
          longDescription: ""
        },
        service11: {
          title: "Obesity",
          shortDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
          longDescription: ""
        },
        service12: {
          title: "Venereal disease",
          shortDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
          longDescription: ""
        }
    },
    {
      aboutHead: "About Us",
      aboutHeading: "Understand who we are and why we exist",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
    },
    {
      contactHeading: "Contact Us",
      address: "R. Amauri Souza, 346",
      email: "contato@doctorcare.com"
    },
    {
      whatsapp: "schedule your appointment"
    }
    
  ];


  hindi_content = [
    {
      logo: "डॉ देव",
      start: "शुरू",
      about: "अबाउट",
      services: "सेवाएं",
      contactUs: "संपर्क करें",
      appointment: "नियुक्ति सूची"
    },
    {
      welcome: "डॉक्टर केयर में आपका स्वागत है 👋",
      headHeading: "सभी के लिए सरलीकृत स्वास्थ्य सेवा",
      headDescription: "Doctors at DoctorCare go beyond symptoms to address the root cause of your illness and provide a long-term cure."
    },
    {
      stats1: {
        title: "रोगियों की सेवा",
      },
      stats2: {
        title: "विशेषज्ञ उपलब्ध",
      },
      stats3: {
        title: "Years on the market",
      }
    },
    {
      servicesHead: "सेवाएं",
      servicesHeading: "यहां हमारे पास आयुर्वेदिक पद्धति और पंचकर्म के माध्यम से निम्नलिखित रोगों का स्थायी उपचार है.",
        service1: {
          title: "त्वचा रोग",
          shortDescription: "त्वचा विकार लक्षणों और गंभीरता में बहुत भिन्न होते हैं। वे अस्थायी या स्थायी हो सकते हैं, और दर्द रहित या दर्दनाक हो सकते हैं। कुछ में स्थितिजन्य कारण होते हैं, जबकि अन्य अनुवांशिक हो सकते हैं। कुछ त्वचा की स्थिति मामूली होती है, और अन्य जीवन के लिए खतरा हो सकती हैं।",
          longDescription: ""
        },
        service2: {
          title: "मधुमेह",
          shortDescription: "मधुमेह चयापचय संबंधी विकारों का एक समूह है जो लंबे समय तक उच्च रक्त शर्करा के स्तर की विशेषता है। लक्षणों में अक्सर बार-बार पेशाब आना, प्यास का बढ़ना और भूख में वृद्धि शामिल है। यदि अनुपचारित छोड़ दिया जाए, तो मधुमेह कई स्वास्थ्य जटिलताओं का कारण बन सकता है।",
          longDescription: ""
        },
        service3: {
          title: "किडनी रोग",
          shortDescription: "गुर्दे सेम के आकार के होते हैं (किडनी बीन्स, स्वाभाविक रूप से) और अपशिष्ट को हटाने के लिए रक्त को छानने में अपना दिन व्यतीत करते हैं। वे आपके इलेक्ट्रोलाइट स्तर को भी संतुलित करते हैं। गुर्दे द्वारा रक्त से निकाले गए अपशिष्ट को फिर मूत्र में भेज दिया जाता है और शरीर से बाहर निकल जाता है। आपके शरीर का सारा खून हर दिन कई बार किडनी से होकर साफ होता है। यह एक बड़ा काम है, और अगर आपकी किडनी ठीक से काम नहीं कर रही है, तो इससे गंभीर स्वास्थ्य समस्याएं हो सकती हैं। वास्तव में, कई गुर्दा रोग जीवन के लिए खतरा हो सकते हैं।",
          longDescription: ""
        },
        service4: {
          title: "आंतरिक रोग",
          shortDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
          longDescription: ""
        },
        service5: {
          title: "बाल झड़ना",
          shortDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
          longDescription: ""
        },
        service6: {
          title: "ब्लड प्रेशर",
          shortDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
          longDescription: ""
        },service7: {
          title: "लीवर की समस्याएं",
          shortDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
          longDescription: ""
        },
        service8: {
          title: "बवासीर",
          shortDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
          longDescription: ""
        },
        service9: {
          title: "जोड़ों का दर्द",
          shortDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
          longDescription: ""
        },
        service10: {
          title: "पेट की बीमारी",
          shortDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
          longDescription: ""
        },
        service11: {
          title: "मोटापा",
          shortDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
          longDescription: ""
        },
        service12: {
          title: "गुप्त रोग",
          shortDescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
          longDescription: ""
      }
    },
    {
      aboutHead: "अबाउट  अस",
      aboutHeading: "समझें कि हम कौन हैं और हम क्यों हैं",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
    },
    {
      contactHeading: "Contact Us",
      address: "R. Amauri Souza, 346",
      email: "contato@doctorcare.com"
    },
    {
      whatsapp: "अपनी नियुक्ति का समय निर्धारित करें"
    }
    
  ];

constructor() {
    this.timerSubscription1 = interval(1).pipe(map(() => this.valueCounter1())).subscribe();
    this.timerSubscription2 = interval(100).pipe(map(() => this.valueCounter2())).subscribe();
    this.timerSubscription3 = interval(100).pipe(map(() => this.valueCounter3())).subscribe();
    
  }

ngOnInit(){
 
}
english(){
  this.lang_english = true;
  this.lang_hindi = false;
  this.languageSelected =true;
}
hindi(){
  this.lang_hindi = true;
  this.lang_english = false;
  this.languageSelected =true;
}
valueCounter1() {
  this.counter1++
  if (this.counter1 >= this.value1) {
    this.timerSubscription1.unsubscribe()
  }
}
valueCounter2() {
  this.counter2++
  if (this.counter2 >= this.value2) {
    this.timerSubscription2.unsubscribe()
  }
}
valueCounter3() {
  this.counter3++
  if (this.counter3 >= this.value3) {
    this.timerSubscription3.unsubscribe()
  }
}

}
