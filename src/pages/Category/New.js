import ResponsiveComponent from '@/Components/CategoryItems/NewCat';
import React from 'react';

const Item = [
    {
        title: 'شیرین کننده ها',
        link: '',
        texts: [
            {
                text: 'دکستروز خشک',
                link: ''
            },
            {
                text: 'مالتو دکسترین',
                link: ''
            },
        ]
    },
    {
        title: 'امولسیفایر ها',
        link: '',
        texts: [
            {
                text: 'مونو دی گلیسیرید',
                link: ''
            },
            {
                text: 'لسیتین',
                link: ''
            },
            {
                text: 'گلیسیرین',
                link: ''
            },
        ]
    },
    {
        title: 'نگهدارنده ها',
        link: '',
        texts: [
            {
                text: 'پروپیلن گلایکول (MPG)',
                link: ''
            },
            {
                text: 'سوربات پتاسیم',
                link: ''
            },
            {
                text: 'گوارگام',
                link: ''
            },
        ]
    },
    {
        title: 'اسید ها',
        link: '',
        texts: [
            {
                text: 'اسید فسفریک ۸۵ درصد',
                link: ''
            },
            {
                text: 'اسید لاکتیک',
                link: ''
            },
            {
                text: 'آسکوربیک اسید (ویتامین C)',
                link: ''
            },
        ]
    },
    {
        title: 'طعم دهنده ها',
        link: '',
        texts: [
            {
                text: 'گلوتامات',
                link: ''
            },
            {
                text: 'سیترات سدیم',
                link: ''
            },
        ]
    },
    {
        title: 'پایدار کننده ها',
        link: '',
        texts: [
            {
                text: 'سدیم کربوکسی متیل سلولز (CMC)',
                link: ''
            },
            {
                text: 'زانتان گام',
                link: ''
            },
        ]
    },
    {
        title: 'فسفاته ها',
        link: '',
        texts: [
            {
                text: 'تترا سدیم پیروفسفات',
                link: ''
            },
        ]
    },
    {
        title: 'نمک ها',
        link: '',
        texts: [
            {
                text: 'بی کربنات سدیم (جوش شیرین)',
                link: ''
            },
        ]
    },
    {
        title: 'گرید صنعتی',
        link: '',
        texts: [
            {
                text: 'پتاسیم هیدروکسید (KOH)',
                link: ''
            },
        ]
    },
]

const App = () => {
    return (
        <div>
            <ResponsiveComponent data={Item} />
        </div>
    );
};

export default App;
